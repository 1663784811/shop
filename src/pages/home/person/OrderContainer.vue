<template>
    <div class="orderContainer">
        <div class="top">
            <h2 class="title">我的订单</h2>
            <div class="search">
                <Input search placeholder="订单 / 商品编号 / 商品名 "/>
            </div>
        </div>
        <div v-if="orderDataArr.length>0">
            <ul>
                <li v-for="orderData in orderDataArr">
                    <div class="orderBox">
                        <div class="orderTop">
                            <span class="topLi">订单号:{{orderData.ordernum}}</span>
                            <span class="topLi">下单时间：{{orderData.createtime}}</span>
                            <span v-if="orderData.status===0" class="topLi f_right">状态：下单成功</span>
                            <span v-else-if="orderData.status===1" class="topLi f_right">状态：已支付</span>
                            <span v-else-if="orderData.status===2" class="topLi f_right">状态：正在派送</span>
                            <span v-else-if="orderData.status===3" class="topLi f_right">状态：完成</span>
                        </div>
                        <div class="orderContent">
                            <div class="productLi" v-for="products in orderData.sorderproducts">
                                <div class="imgBox">
                                    <img :src="products.photo">
                                </div>
                                <p class="productName">{{products.product}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {{products.color}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{products.edition}}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{products.aset}}</p>
                                <p class="priceP">
                                    <span class="priceLi">¥{{products.price}}</span>
                                    <span class="priceLi">X  {{products.count}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="orderBottom">
                            <span class="f_left">收货人:{{orderData.name}},  地址：{{orderData.address}}</span>
                            <span class="bottomLi">总计：{{orderData.price}}</span>
                            <span class="bottomLi">实付：{{orderData.truepay}}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="pageBox">
                <Page :total="total" :page-size="size" :current="page" @on-change="changePage"/>
            </div>
        </div>
        <div v-else>
            <p style="text-align: center;padding: 50px 0; font-size: 20px; color: #999;">暂无数据</p>
        </div>
    </div>
</template>

<script>
    import {
        API_WEB_findMyOrder
    } from "@/shop/config/api/getData";

    export default {
        name: "OrderContainer",
        data() {
            return {
                page: 1,
                size: 3,
                total: 0,
                orderDataArr: [],
                search: ""
            }
        },
        methods: {
            requestMyOrder: function () {
                let json = {
                    page: this.page,
                    size: this.size,
                    search: this.search,
                    sort: "id_desc"
                };
                API_WEB_findMyOrder(json).then(res => {
                    this.page = res.page;
                    this.size = res.size;
                    this.total = res.total;
                    this.orderDataArr = res.data;
                })
            },
            changePage: function (page) {
                this.page = page;
                this.requestMyOrder();
            }
        },
        mounted() {
            this.requestMyOrder();
        }


    }
</script>

<style scoped lang="stylus">
    .top
        position: relative;

    .title
        font-size: 30px;
        font-weight: 400;
        color: #757575;
        margin-bottom: 20px;

    .search
        position: absolute;
        right: 0;
        top: 10px;
        width: 200px;

    .orderBox
        border: 1px solid #efefef;
        margin-bottom: 10px;

        .orderTop
            padding: 10px;
            border-bottom: 1px solid #efefef;

            .topLi
                margin-right: 20px;

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
                margin-right: 16px;

    .pageBox
        text-align: right;
        margin-top: 40px;


</style>
