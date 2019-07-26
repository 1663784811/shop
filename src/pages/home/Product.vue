<template>
    <div class="product minwidth">
        <ShopHeader></ShopHeader>
        <div class="breadcrumb">
            <div class="container">
                <Breadcrumb separator=">">
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem>商品详情</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>

        <div class="productMain">
            <div class="container">
                <div class="productLeft f_left">
                    <div class="imgBox">
                        <img v-if="sProductphotoList[photoKey]" :src="sProductphotoList[photoKey].photo">
                    </div>
                    <div class="imgList clear_f">
                        <div class="imgLi f_left" :class="{active:key===photoKey}"
                             v-for="(sProductphoto , key ) in sProductphotoList "
                             @mouseenter="shoPhoto(key)">
                            <img :src="sProductphoto.photo">
                        </div>
                    </div>
                </div>
                <div class="productRight f_right">
                    <div>
                        <h2 class="title textOne">{{sProduct.title}}</h2>
                        <p class="subtitle">{{sProduct.subtitle}}</p>
                        <div class="productInfo">
                            <div class="row">
                                <span class="tagName">价格：</span>
                                <div class="priceText textOne">{{price}}￥</div>
                            </div>
                            <div class="row">
                                <span class="tagName">促销：</span>
                                <template v-if="sProduct.promote">
                                    <Tag type="border" color="error" v-for="item in sProduct.promote.split(',')">
                                        {{item}}
                                    </Tag>
                                </template>
                            </div>
                        </div>
                        <div class="row">
                            <span class="tagName">服务说明：</span>
                            <p class="top8">已满48元已免运费 由华为商城负责发货，并提供售后服务</p>
                        </div>
                        <div class="row">
                            <span class="tagName">商品编号：</span>
                            <p class="top8"> &nbsp;{{sProduct.productnum}}</p>
                        </div>
                        <div class="row">
                            <span class="tagName">选择颜色：</span>
                            <div class="selectBtn imgBtn"
                                 :class="{
                                    disableSelect: ( enableSelect.color.indexOf(color.color) === -1 ),
                                    selected:selectColor===color.color
                                  }"
                                 v-for="color in colorList"
                                 @click="selectColorFn(color.color)">
                                <img :src="color.photo">
                                <span>{{color.color}}</span>
                            </div>
                        </div>
                        <div class="row">
                            <span class="tagName">选择版本：</span>
                            <div class="selectBtn"
                                 :class="{
                                    disableSelect:( enableSelect.edition.indexOf(edition.edition) === -1 ),
                                    selected:selectEdition===edition.edition
                                 }"
                                 v-for="edition in editionList"
                                 @click="selectEditionFn(edition.edition)"
                            >{{edition.edition}}
                            </div>
                        </div>
                        <div class="row">
                            <span class="tagName">选择套餐：</span>
                            <div class="selectBtn"
                                 :class="{
                                    disableSelect:( enableSelect.aset.indexOf(aset.aset) === -1 ),
                                    selected:selectAset===aset.aset
                                  }"
                                 v-for="aset in asetList"
                                 @click="selectAsetFn(aset.aset)"
                            >{{aset.aset}}
                            </div>
                        </div>
                        <div class="row">
                            <span class="tagName">数量:</span>
                            <InputNumber size="large" :min="1" :max="maxNumFn" v-model="selectCount"></InputNumber>
                        </div>

                        <div class="row">
                            <span class="tagName">已选择商品:</span>
                            <p class="top8 selectText">
                                {{selectColor}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {{selectEdition}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {{selectAset}}&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;
                                {{selectCount}}</p>
                        </div>


                        <div class="row">
                            <span class="tagName"></span>
                            <div class="addcard f_left" @click="addCar">加入购物车</div>
                            <div class="shopnow f_left" @click="clickCountBtn">立即下单</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tagBox">
            <div class="container">
                <span class="tagLi">规格参数</span>
                <span class="tagLi">商品详情</span>
                <span class="tagLi">用户评价(0)</span>
            </div>
        </div>

        <div class="titleBox">
            <div class="container">
                <h2 class="title">规格参数</h2>
            </div>
        </div>
        <div class="parameterBox">
            <div class="container">
                <div class="parameterRow" v-for="sParameter in sParameterList">
                    <p class="parameterName">{{sParameter.name}}:</p>
                    <p class="parameterValue">{{sParameter.parametervalue}}</p>
                </div>
            </div>
        </div>

        <div class="titleBox">
            <div class="container">
                <h2 class="title">商品详情</h2>
            </div>
        </div>
        <div class="detailsBox" v-html="sProduct.details"></div>


        <ShopFooter></ShopFooter>
    </div>
</template>

<script>
    import ShopHeader from "./components/ShopHeader";
    import ShopFooter from "./components/ShopFooter";
    import {
        API_WEB_findIdSProduct,
        API_WEB_addCar
    } from "@/config/api/getData";
    import {
        IS_ARRAYHAVE,
        ENCODEVALUE,
        GETCOOKIE
    } from '@/assets/common/js/global';

    export default {
        name: "Product",
        components: {
            ShopHeader,
            ShopFooter
        },
        data() {
            return {
                productId: this.$route.params.id,
                sProduct: {},
                sProductphotoList: [],
                sSelectcolorList: [],
                sParameterList: [],

                colorList: [],
                editionList: [],
                asetList: [],

                selectColor: "",
                selectEdition: "",
                selectAset: "",

                selectCount: 1,
                photoKey: 0
            }
        },
        methods: {
            selectColorFn: function (color) {
                let c = this.enableSelect.color;
                if (c.indexOf(color) !== -1) {
                    if (this.selectColor === color) {
                        this.selectColor = "";
                    } else {
                        this.selectColor = color;
                    }
                }
            },
            selectEditionFn: function (edition) {
                let e = this.enableSelect.edition;
                if (e.indexOf(edition) !== -1) {
                    if (this.selectEdition === edition) {
                        this.selectEdition = "";
                    } else {
                        this.selectEdition = edition;
                    }
                }
            },
            selectAsetFn: function (aset) {
                let a = this.enableSelect.aset;
                if (a.indexOf(aset) !== -1) {
                    if (this.selectAset === aset) {
                        this.selectAset = "";
                    } else {
                        this.selectAset = aset;
                    }
                }
            },


            shoPhoto: function (key) {
                this.photoKey = key
            },
            clickCountBtn: function () {
                if (!GETCOOKIE("shop_token")) {
                    this.$router.push({
                        path: "/shop/login/0"
                    })
                }
                let sSelectcolorList = this.sSelectcolorList;
                for (let i = 0; i < sSelectcolorList.length; i++) {
                    if (
                        this.selectColor === sSelectcolorList[i].color
                        && this.selectEdition === sSelectcolorList[i].edition
                        && this.selectAset === sSelectcolorList[i].aset
                    ) {
                        var jsonArr = [{
                            selectcolorid: sSelectcolorList[i].tid,
                            count: this.selectCount
                        }];
                        this.$router.push({
                            path: "/shop/settlement/" + ENCODEVALUE(JSON.stringify(jsonArr))
                        });
                        return;
                    }
                }
                this.$Message.warning("请选择商品!");
            },
            //加入购物车
            addCar: function () {
                if (!GETCOOKIE("shop_token")) {
                    this.$router.push({
                        path: "/shop/login/0"
                    });
                    return;
                } else {
                    let sSelectcolorList = this.sSelectcolorList;
                    for (let i = 0; i < sSelectcolorList.length; i++) {
                        if (
                            this.selectColor === sSelectcolorList[i].color
                            && this.selectEdition === sSelectcolorList[i].edition
                            && this.selectAset === sSelectcolorList[i].aset
                        ) {
                            API_WEB_addCar({
                                selectcolorid: sSelectcolorList[i].tid,
                                count: this.selectCount
                            }).then(() => {
                                this.$Message.success("加入购物车成功！")
                            }).catch(() => {
                                this.$Message.error("加入购物车失败！")
                            });
                            break;
                        }
                    }
                }
            },

            getProduct: function () {
                if (this.productId !== undefined) {
                    API_WEB_findIdSProduct({id: this.productId}).then(res => {
                        this.sProduct = res.sProduct;
                        this.sProductphotoList = res.sProductphotoList;
                        this.sSelectcolorList = res.sSelectcolorList;
                        this.sParameterList = res.sParameterList;

                        let sSelectcolorList = this.sSelectcolorList;
                        //=================
                        let colorArr = [];
                        let editionArrArr = [];
                        let asetArr = [];

                        for (let i = 0; i < sSelectcolorList.length; i++) {
                            let index = IS_ARRAYHAVE(colorArr, sSelectcolorList[i].color, 'color');
                            if (index !== -1) {
                                colorArr[index]._count += sSelectcolorList[i].count;
                            } else {
                                colorArr.push(sSelectcolorList[i]);
                                colorArr[colorArr.length - 1]._count = sSelectcolorList[i].count;
                            }
                            index = IS_ARRAYHAVE(editionArrArr, sSelectcolorList[i].edition, 'edition');
                            if (index !== -1) {
                                editionArrArr[index]._count += sSelectcolorList[i].count;
                            } else {
                                editionArrArr.push(sSelectcolorList[i]);
                                editionArrArr[editionArrArr.length - 1]._count = sSelectcolorList[i].count;
                            }
                            index = IS_ARRAYHAVE(asetArr, sSelectcolorList[i].aset, 'aset');
                            if (index !== -1) {
                                asetArr[index]._count += sSelectcolorList[i].count;
                            } else {
                                asetArr.push(sSelectcolorList[i]);
                                asetArr[asetArr.length - 1]._count = sSelectcolorList[i].count;
                            }
                        }
                        this.colorList = colorArr;
                        this.editionList = editionArrArr;
                        this.asetList = asetArr;
                    });
                }
            }
        },
        mounted() {
            this.getProduct();
        },
        computed: {
            maxNumFn: function () {
                let sSelectcolorList = this.sSelectcolorList;
                for (let i = 0; i < sSelectcolorList.length; i++) {
                    if (this.selectColor === sSelectcolorList[i].color
                        && this.selectEdition === sSelectcolorList[i].edition
                        && this.selectAset === sSelectcolorList[i].aset) {
                        return sSelectcolorList[i].count;
                    }
                }

                return 1;
            },
            price: function () {
                let sSelectcolorList = this.sSelectcolorList;
                for (let i = 0; i < sSelectcolorList.length; i++) {
                    if (this.selectColor === sSelectcolorList[i].color
                        && this.selectEdition === sSelectcolorList[i].edition
                        && this.selectAset === sSelectcolorList[i].aset) {
                        return this.selectCount * sSelectcolorList[i].price;
                    }
                }
                return "--.-";
            },
            /**
             * 可选： {
             *     color:[],
             *     edition:[],
             *     aset:[]
             * }
             */
            enableSelect: function () {
                let json = {};
                let color = [];
                let edition = [];
                let aset = [];
                let sSelectcolorList = this.sSelectcolorList;
                for (let i = 0; i < sSelectcolorList.length; i++) {
                    let c = sSelectcolorList[i].color;
                    let e = sSelectcolorList[i].edition;
                    let a = sSelectcolorList[i].aset;

                    if (
                        sSelectcolorList[i].count > 0
                        && (this.selectEdition === "" || this.selectEdition === sSelectcolorList[i].edition)
                        && (this.selectAset === "" || this.selectAset === sSelectcolorList[i].aset)
                    ) {
                        color.indexOf(c) !== -1 ? "" : color.push(c);
                    }
                    if (sSelectcolorList[i].count > 0
                        && (this.selectColor === "" || this.selectColor === sSelectcolorList[i].color)
                        && (this.selectAset === "" || this.selectAset === sSelectcolorList[i].aset)
                    ) {
                        edition.indexOf(e) !== -1 ? "" : edition.push(e);
                    }
                    if (
                        sSelectcolorList[i].count > 0
                        && (this.selectColor === "" || this.selectColor === sSelectcolorList[i].color)
                        && (this.selectEdition === "" || this.selectEdition === sSelectcolorList[i].edition)
                    ) {
                        aset.indexOf(a) !== -1 ? "" : aset.push(a);
                    }
                }
                json.color = color;
                json.edition = edition;
                json.aset = aset;
                return json;
            }

        },
        watch: {
            selectColor: function () {

            }
        }


    }
</script>

<style scoped lang="stylus">
    .breadcrumb
        margin: 10px 0;

    .productMain
        .productLeft
            width: 450px;

            .imgBox
                width: 380px;
                min-height: 380px;
                margin: 50px auto;

            .imgList
                .imgLi
                    border: 1px solid #f1f0f0;
                    margin: 10px;
                    padding: 4px;
                    width: 60px;
                    cursor: pointer;

                .active
                    border: 1px solid red;

                    img
                        width: 50px;

        .productRight
            width: 730px;
            padding: 0 20px;

        .title
            font-size: 21px;
            max-height: 84px;
            overflow: hidden;


        .subtitle
            color: #ca141d;
            margin: 16px 0;

        .productInfo
            background: #f5f5f5;
            padding-bottom: 20px;

        .row
            position: relative;
            padding-left: 100px;
            padding-top: 20px;
            min-height: 38px;

            .tagName
                position: absolute;
                top: 28px;
                left: 10px;
                width: 80px;
                color: #3a3a3a;
                text-align: right;

            .selectBtn
                float: left;
                margin: 0 10px 10px 0;
                border: 1px solid #bdbdbd;
                padding: 8px 16px;
                cursor: pointer;
                vertical-align: middle;
                user-select: none;
                border-radius: 4px;
                position: relative;

            .imgBtn
                padding 12px;
                padding-left: 40px;

                img
                    top: 6px;
                    left: 6px;
                    position: absolute;
                    vertical-align: middle;
                    height: 30px;


            .disableSelect
                cursor: not-allowed
                border: 1px solid #eee;
                color: #c1c1c1;

            .userable
                &:hover
                    border: 1px solid #ee4a20;

            .selected
                border: 1px solid #ee4a20;
                color: #ee4a20;

            .priceText
                font-size: 24px;
                color: #ca141d;

            .addcard
                text-align: center;
                background: #fc600c;
                padding: 12px 32px;
                display: inline;
                font-size: 18px;
                margin-right: 20px;
                color: #fff;
                cursor: pointer;
                width: 154px;
                border-radius: 4px;
                user-select: none;

                &:hover
                    background: #fb6d21;

            .shopnow
                background: #ca151d;
                text-align: center;
                padding: 12px 32px;
                display: inline;
                font-size: 18px;
                color: #fff;
                cursor: pointer;
                width: 154px;
                border-radius: 4px;
                user-select: none;

                &:hover
                    background: #d62b33;

            .top8
                margin-top: 8px;

            .selectText
                color #d62b33;

    .tagBox
        text-align: center;
        padding: 40px 0 20px 0;
        margin-top: 50px;
        border-top: 1px solid #eeee;

        .tagLi
            font-size: 18px;
            margin: 0 18px;
            color: #a4a4a4;
            cursor: pointer;

    .parameterBox
        .parameterRow
            position: relative;
            min-height: 34px;

            .parameterName
                position: absolute;
                width: 280px;
                top: 0;
                left: 0;
                text-align: right;
                font-size: 14px;
                color: #3a3a3a

            .parameterValue
                margin-left: 300px;
                font-size: 14px;
                color: #a4a4a4

    .titleBox
        .title
            margin: 40px 0;
            font-size: 18px;
            color: #3a3a3a;
            padding: 0 0 10px 10px;
            border-bottom: 1px solid #ca141d;
            font-weight: bold;

    .detailsBox
        padding: 20px 0;
        font-size: 0;

</style>
