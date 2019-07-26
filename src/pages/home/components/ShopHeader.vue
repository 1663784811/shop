<template>
    <div class="shopHeader">
        <div class="top">
            <div class="container">
                <div class="topLeft f_left">
                    <ul class="clear_f">
                        <li class="f_left">
                            <router-link class="lia" to="/">首页</router-link>
                        </li>
                        <li class="f_left">
                            <router-link class="lia" to="/about">关于我们</router-link>
                        </li>
                    </ul>
                </div>
                <div class="topRight f_right">
                    <div class="rightNav f_left">
                        <ul class="clear_f">
                            <li class="f_left" v-if="!userInfo">
                                <router-link class="lia" to="/shop/login/0">请登录</router-link>
                            </li>
                            <li class="f_left" v-if="!userInfo">
                                <router-link class="lia" to="/shop/login/2">注册</router-link>
                            </li>
                            <li class="f_left" v-if="userInfo">
                                <router-link class="lia" to="/shop/person">
                                    {{userInfo.nickname||userInfo.account}}
                                </router-link>
                            </li>
                            <li class="f_left" v-if="userInfo">
                                <span class="lia" @click="clickLogout">退出登录</span>
                            </li>
                            <li class="f_left">
                                <router-link class="lia" to="/shop/person/order">我的订单</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="f_left">
                        <div class="carBox">
                            <span class="carBtn">购物车({{ carDate.length }} )</span>
                            <div class="productBox">
                                <template v-if="carDate.length>0">
                                    <ul>
                                        <CheckboxGroup v-model="selectDateArr">
                                            <li v-for="car in carDate">
                                                <div class="product">
                                                    <Checkbox class="checkbox" :label="car.selectcolorid">&nbsp;
                                                    </Checkbox>
                                                    <div class="imgBox">
                                                        <img :src="car.photo">
                                                    </div>
                                                    <div class="textBox">
                                                        <p class="textOne">{{car.product}}</p>
                                                        <p class="priceLi">
                                                            <span>¥ {{car.price}}</span>
                                                            <span>
                                                                x&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <InputNumber
                                                                        size="small"
                                                                        :min="1"
                                                                        v-model="car.count"></InputNumber>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </CheckboxGroup>
                                    </ul>
                                    <div class="countBox">
                                        <p class="countP">总计: <span class="price">{{countPrice}}￥</span></p>
                                        <span class="countBtn" @click="clickCountBtn">去结算</span>
                                    </div>
                                </template>
                                <div class="empty" v-else>
                                    <span class="emptyIcon"><Icon type="ios-cart-outline"/></span>
                                    <span class="emptyText">您的购物车是空的，赶紧选购吧~</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header">
            <div class="container">
                <div class="headerLeft f_left">
                    <div class="logo f_left">
                        <router-link to="/shop">
                            <img class="logoImg" src="~@/assets/img/logo.png" alt="">
                        </router-link>
                    </div>
                    <div class="nav f_left">
                        <ul class="clear_f">
                            <li class="f_left navLi">
                                <router-link class="navA" to="/shop/productList/手机">手机</router-link>
                            </li>
                            <li class="f_left navLi">
                                <router-link class="navA" to="/shop/productList/智能穿戴">智能穿戴</router-link>
                            </li>
                            <li class="f_left navLi">
                                <router-link class="navA" to="/shop/productList/电脑">电脑</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="headerRight f_right">
                    <div class="search">
                        <Input search placeholder="搜索"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        API_WEB_findMyCar,
        API_WEB_logoutAdmin,
    } from "@/config/api/getData";
    import {
        SETCOOKIE,
        GETCOOKIE,
        ENCODEVALUE
    } from '@/assets/common/js/global';

    export default {
        name: "ShopHeader",
        data() {
            return {
                single: true,
                carDate: [],
                selectDateArr: []
            }
        },
        methods: {
            clickCountBtn: function () {
                var jsonArr = [];
                let carDate = this.carDate;
                let selectDateArr = this.selectDateArr;
                for (let i = 0; i < carDate.length; i++) {
                    if (selectDateArr.indexOf(carDate[i].selectcolorid) != -1) {
                        let json = {
                            selectcolorid: carDate[i].selectcolorid,
                            count: carDate[i].count
                        };
                        jsonArr.push(json)
                    }
                }
                if (jsonArr.length > 0) {
                    this.$router.push({
                        path: "/shop/settlement/" + ENCODEVALUE(JSON.stringify(jsonArr))
                    })
                } else {
                    this.$Message.warning("请选择商品!");
                }
            },
            requestCar() {
                API_WEB_findMyCar().then(res => {
                    this.carDate = res;
                })
            },
            clickLogout: function () {
                this.$Message.success("退出成功");
                API_WEB_logoutAdmin().then(() => {
                    SETCOOKIE("shop_token", undefined, {path: '/', expires: -1});
                    localStorage.clear("userInfo");
                    this.$router.push({path: "/shop/login"});
                }).then(() => {
                    SETCOOKIE("shop_token", undefined, {path: '/', expires: -1});
                    localStorage.clear("userInfo");
                    this.$router.push({path: "/shop/login"});
                })
            }

        },
        mounted() {
            this.requestCar();
        },
        computed: {
            userInfo: function () {
                let user = localStorage.getItem("userInfo");
                let token = GETCOOKIE("shop_token");
                return (user && token) ? JSON.parse(user) : undefined;
            },
            //计算总价
            countPrice: function () {
                let n = 0;
                let carDate = this.carDate;
                let selectDateArr = this.selectDateArr;
                for (let i = 0; i < carDate.length; i++) {
                    if (selectDateArr.indexOf(carDate[i].selectcolorid) != -1) {
                        n += carDate[i].price * carDate[i].count;
                    }
                }
                return n;
            }
        }

    }
</script>

<style scoped lang="stylus">
    .shopHeader
        .top
            min-width: 1200px;
            height: 36px;
            line-height: 36px;
            background-color: #f9f9f9;
            position: relative;
            z-index: 411;

            .topLeft
                ul
                    li
                        .lia
                            font-size: 12px;
                            color: #a4a4a4
                            padding-right: 10px;
                            margin-right: 10px;
                            border-right: 1px solid #ccc;
                            cursor: pointer;

                        &:last-child
                            .lia
                                border-right: none;

            .topRight
                ul
                    li
                        .lia
                            font-size: 12px;
                            color: #a4a4a4
                            padding-right: 10px;
                            margin-right: 10px;
                            border-right: 1px solid #ccc;
                            cursor: pointer;

                            &:hover
                                color: red;

                        &:last-child
                            .lia
                                border-right: none;


                .carBox
                    position: relative;

                    .carBtn
                        height: 100%;
                        display: block
                        padding: 0 20px;
                        background: #de556c
                        color: #fff;
                        cursor: pointer;

                    &:hover
                        .carBtn
                            background: #fff;
                            color: #a4a4a4

                        .productBox
                            display: block;

                    .productBox
                        display: none;
                        position: absolute;
                        top: 100%;
                        width: 460px;
                        right: 0;
                        box-shadow: 0 4px 4px #bdbdbd;
                        background: #fff;

                        .product
                            padding: 20px;
                            border-bottom: 1px solid #efefef;
                            position: relative;

                            .checkbox
                                position: absolute;
                                top: 32px;
                                left: 20px;

                            .imgBox
                                position: absolute;
                                top: 20px;
                                left: 40px;
                                width: 46px;

                            .textBox
                                margin-left: 90px;

                                .priceLi
                                    text-align: right;

                                    span
                                        margin-right: 20px;


                        .countBox
                            position: relative;
                            height: 40px;
                            overflow: hidden;

                            .countP
                                padding: 0 20px;
                                line-height: 40px;

                                .price
                                    margin-left: 10px;
                                    color: #ef4a2c


                            .countBtn
                                user-select: none;
                                position: absolute;
                                right: 0;
                                top: 0;
                                bottom: 0;
                                width: 90px;
                                line-height: 40px;
                                color: #fff;
                                cursor: pointer;
                                text-align: center;
                                vertical-align: middle;
                                background: #de556c;

                                &:hover
                                    background: #ef4a2c;

                                &:active
                                    background: #de556c;

                        .empty
                            text-align: center;
                            padding: 50px;

                            .emptyIcon
                                font-size: 60px;

                            .emptyText
                                display: block;

        .header
            padding: 20px 0;
            box-shadow: 0 2px 4px #ececec;
            background: #fff;

            .logo
                height: 40px;

                img
                    height: 100%;

            .nav

                .navLi
                    margin-top: 10px;

                    .navA
                        margin-left: 20px;
                        padding: 6px 16px;
                        border-radius: 20px;
                        color: #333
                        font-size: 16px;

                        &:hover
                            color: #9a9a9a;

                    &:nth-child(1)
                        .navA
                            background: #de556c;
                            color: #fff;

                            &:hover
                                background #f36e84;

                    &:nth-child(2)
                        .navA
                            background: #aace8a;
                            color: #ffffff;

                            &:hover
                                background #f36e84;

            .headerRight
                .search
                    width: 300px;
</style>
