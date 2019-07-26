<template>
    <div class="settlement minwidth">
        <ShopHeader></ShopHeader>
        <div class="breadcrumb">
            <div class="container">
                <Breadcrumb separator=">">
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem>结算</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <div class="settlementMain">
            <div class="container">
                <div v-if="idArr && idArr.length > 0">
                    <h2 class="title">确认订单</h2>
                    <div class="addressBox clear_f">
                        <p class="mtitle">收货人信息</p>
                        <div class="addressLi f_left" v-for="(address ,key) in addressArr"
                             @click="addressKey = key">
                            <p class="selectIcon" v-show="addressKey===key">
                                <Icon type="md-checkmark-circle"/>
                            </p>
                            <p>姓名：{{address.name}}</p>
                            <p>电话：{{address.phone}}</p>
                            <p>地址：{{address.city}}{{address.address}}</p>
                        </div>
                        <div class="addressLi f_left addaddress" @click="addaddressFn">
                            <Icon type="md-add-circle"/>
                        </div>
                    </div>
                    <div class="orderContent">
                        <div class="productLi" v-for="product in productDate">
                            <div class="imgBox">
                                <img :src="product.photo">
                            </div>
                            <p class="productName textOne">
                                {{product.sproduct.title}}{{product.color}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{product.edition}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{product.aset}}</p>
                            <p class="priceP">
                                <span class="priceLi">¥{{product.price}}</span>
                                <span class="priceLi">X {{product._count}} </span>
                            </p>
                        </div>
                    </div>
                    <div class="orderBottom">
                        <span class="bottomLi">总计：{{countPrice}}￥</span>
                        <span class="bottomLi payBtn" @click="clickPay">支付</span>
                    </div>
                </div>
                <div v-else>
                    <Spin>
                        <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </div>
                <Spin size="large" fix v-show="loaddingOrder">
                    <div class="loaddingBox">
                        <p>
                            <Icon type="ios-loading" class="demo-spin-icon-load"></Icon>
                        </p>
                        <p>{{orderMessage}}</p>
                    </div>
                </Spin>

            </div>
        </div>
        <ShopFooter></ShopFooter>
        <!--====  添加  ====-->
        <BaseWindow ref="refAddBaseWindow"
                    :title="addTitle"
                    :fieldData="addFieldData"
                    @submitForm="addSubmitForm"
        ></BaseWindow>
    </div>
</template>

<script>
    import ShopHeader from "./components/ShopHeader";
    import ShopFooter from "./components/ShopFooter";
    import BaseWindow from '@/components/admin/BaseWindow';
    import {

        API_WEB_findProductByColorid,
        API_WEB_myAddress,
        API_WEB_createOrder,
        API_WEB_addMyAddress
    } from "@/shop/config/api/getData";
    import {
        TitleJson,
        addFieldDataJson
    } from "@/shop/config/jsonObj/sAddress";

    export default {
        name: "Settlement",
        components: {
            ShopHeader,
            ShopFooter,
            BaseWindow
        },
        data() {
            return {
                idArr: [],
                productDate: [],
                addressArr: [],
                loaddingOrder: false,
                orderMessage: "正在生成订单。。。",
                addressKey: 0,

                addTitle: TitleJson,
                addFieldData: addFieldDataJson,
                addFieldDataT: [],//添加字段数据

            }
        },
        methods: {
            addaddressFn: function () {
                this.$refs.refAddBaseWindow.operationWindow(true);
            },
            //=== 添加提交表单数据
            addSubmitForm: function (formData) {
                this.submitData = formData;
                this.$refs.refAddBaseWindow.setLoading(true);
                API_WEB_addMyAddress(this.submitData).then(res => {
                    this.$refs.refAddBaseWindow.operationWindow(false);
                    this.$refs.refAddBaseWindow.setfromData({});
                    this.$refs.refAddBaseWindow.setLoading(false);
                    this.$Message.success("添加成功");
                    this.addFieldDataT = [];
                    this.requestMyAddress();
                }, errorData => {
                    this.$Message.error("添加失败" + errorData);
                    this.$refs.refAddBaseWindow.setLoading(false);
                });
            },
            requestMyAddress() {
                API_WEB_myAddress({page: 1, size: 3, sort: "id_desc"}).then(res => {
                    this.page = res.page;
                    this.size = res.size;
                    this.addressArr = res.data;
                })
            },
            clickPay: function () {

                let sSelectcolorList = [];
                let productDate = this.productDate;
                for (let i = 0; i < productDate.length; i++) {
                    let js = {
                        tid: productDate[i].tid,
                        count: productDate[i]._count
                    };
                    sSelectcolorList.push(js);
                }
                if (!this.addressArr || this.addressArr.length === 0) {
                    this.$Message.error("请添加收货地址");
                    return;
                }

                let json = {
                    sOrder: {
                        city: this.addressArr[this.addressKey].city,
                        address: this.addressArr[this.addressKey].address,
                        phone: this.addressArr[this.addressKey].phone,
                        postal: this.addressArr[this.addressKey].postal,
                        name: this.addressArr[this.addressKey].name,
                    },
                    sSelectcolorList: sSelectcolorList
                };
                this.loaddingOrder = true;
                let that = this;
                API_WEB_createOrder(json).then(() => {
                    this.orderMessage = "下单成功，正在前往支付页面...";
                    setTimeout(() => {
                        that.$router.push({
                            path: "/shop/pay"
                        })
                    }, 2000);
                }).catch(() => {
                    this.orderMessage = "下单失败，请重试...";
                    setTimeout(() => {
                        that.loaddingOrder = false;
                    }, 2000);
                });
            },
            requestProduct: function () {
                let arr = [];
                let idArr = this.idArr;
                for (let i = 0; i < idArr.length; i++) {
                    arr.push(idArr[i].selectcolorid);
                }
                API_WEB_findProductByColorid({idArr: arr}).then(res => {
                    this.productDate = res;
                    let idArr = this.idArr;
                    for (let i = 0; i < this.productDate.length; i++) {
                        for (let j = 0; j < this.idArr.length; j++) {
                            if (idArr[j].selectcolorid === this.productDate[i].tid) {
                                this.productDate[i]._count = idArr[j].count;
                                continue;
                            }
                        }
                    }
                })
            }
        },
        mounted() {
            let idArr = this.$route.params.idArr;
            if (idArr) {
                this.idArr = JSON.parse(idArr);
            }
            this.requestProduct();
            this.requestMyAddress();
        },
        computed: {
            //计算总价
            countPrice: function () {
                let n = 0;
                let productDate = this.productDate;
                for (let i = 0; i < productDate.length; i++) {
                    n += productDate[i]._count * productDate[i].price;
                }
                return n;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .breadcrumb
        margin: 10px 0;

    .settlementMain
        min-height: 450px;

    .title
        font-size: 30px;
        font-weight: 400;
        color: #757575;
        margin: 20px;

    .addressBox
        .mtitle
            padding: 10px;
            font-size: 14px;

        .addressLi
            background: #f7f7f7;
            width: 250px;
            margin: 0 20px 10px 20px;
            padding: 20px;
            height: 130px;
            cursor: pointer;
            overflow: hidden;
            position: relative;

            p
                margin-bottom: 6px;

            .selectIcon
                position: absolute;
                right: 10px;
                top: 0;
                font-size: 30px;
                color: #19be6b;

        .addaddress
            text-align: center;
            font-size: 30px;
            line-height: 90px;
            color: #ff9900;

    .orderContent
        padding: 10px;
        position: relative;

        .productLi
            min-height: 106px;
            position: relative;
            border-bottom: 1px solid #efefef;

            .productName
                padding: 20px 0;
                margin-left: 90px;
                font-size: 14px;
                color: #333;

            .priceP
                text-align: right;
                margin-left: 100px;
                font-size: 12px;

                .priceLi
                    margin-right: 16px;

            .imgBox
                position: absolute;
                top: 10px;
                left: 10px;
                width: 80px;
                height: 80px;
                overflow: hidden;

    .orderBottom
        padding: 10px 20px 20px 10px;
        text-align: right;

        .bottomLi
            margin-left: 40px;
            display: inline-block;

        .payBtn
            padding: 12px 40px;
            font-size: 16px;
            user-select: none;
            display: inline-block;
            color: #fff;
            cursor: pointer;
            text-align: center;
            vertical-align: middle;
            background: #de556c;
            border-radius: 4px;

            &:hover
                background: #ef4a2c;

    .loaddingBox
        p
            margin: 20px 0;
            font-size: 14px;
            color #40964b;

        .demo-spin-icon-load
            font-size: 40px;
            color #40964b;

</style>
