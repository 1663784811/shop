<template>
    <div class="myCar">
        <div class="top">
            <h2 class="title">我的购物车</h2>
        </div>
        <template v-if="carDate.length>0">
            <div class="carBox">
                <CheckboxGroup
                        v-model="checkAllGroup"
                        @on-change="checkAllGroupChange"
                >
                    <div class="productLi" v-for="car in carDate">
                        <Checkbox class="chatbox" :label="car.selectcolorid">&nbsp;</Checkbox>
                        <div class="imgBox">
                            <img :src="car.photo">
                        </div>
                        <p class="productName textOne">{{car.product}}</p>
                        <p class="priceP">
                            <span class="priceLi">{{car.color}}</span>
                            <span class="priceLi">{{car.edition}}</span>
                            <span class="priceLi">{{car.aset}}</span>
                            <span class="priceLi">¥ {{car.price}}</span>
                            <span class="priceLi">X &nbsp;&nbsp;&nbsp;
                                <InputNumber
                                        :min="1"
                                        v-model="car.count"></InputNumber>
                            </span>
                        </p>
                    </div>
                </CheckboxGroup>
            </div>
            <div class="carBottom clear_f">
                <div class="carBottomLeft f_left">
                    <Checkbox
                            :indeterminate="indeterminate"
                            :value="checkAll"
                            @click.prevent.native="handleCheckAll">&nbsp;
                    </Checkbox>
                    <span>共 2 件商品，已选择 2 件</span>
                </div>
                <div class="carBottomRight f_right">
                    <span class="countText">合计： </span>
                    <span class="price">599</span>
                    <span class="countText">元</span>
                    <span class="countBtn">去结算</span>
                </div>
            </div>

        </template>
        <div class="empty" v-else>
            <div>
                <span class="emptyIcon">
                    <Icon type="ios-cart-outline"/>
                </span>
            </div>
            <span class="emptyText">您的购物车是空的，赶紧选购吧~</span>
        </div>
    </div>
</template>

<script>
    import {
        API_WEB_findMyCar,
        API_WEB_logoutAdmin,
    } from "@/shop/config/api/getData";
    import {
        SETCOOKIE,
        GETCOOKIE,
        ENCODEVALUE
    } from '@/assets/common/js/global';

    export default {
        name: "MyCar",
        data() {
            return {
                indeterminate: true,
                checkAll: false,
                carDate: [],
                checkAllGroup: []
            }
        },
        methods: {
            checkAllGroupChange(data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            },
            handleCheckAll() {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },

            requestCar() {
                API_WEB_findMyCar().then(res => {
                    this.carDate = res;
                })
            },
        },
        mounted() {
            this.requestCar();
        },
    }
</script>

<style scoped lang="stylus">
    .title
        margin: 0;
        font-size: 30px;
        font-weight: 400;
        line-height: 68px;
        color: #757575;

    .productLi
        min-height: 106px;
        position: relative;
        border-bottom: 1px solid #efefef;

        .chatbox
            position: absolute;
            top: 40px;
            left: 0;

        .productName
            padding: 20px 0;
            margin-left: 110px;
            font-size: 14px;
            color: #333;

        .priceP
            text-align: right;
            margin-left: 110px;
            font-size: 12px;

            .priceLi
                margin-right: 16px;

        .imgBox
            position: absolute;
            top: 10px;
            left: 30px;
            width: 80px;
            height: 80px;
            overflow: hidden;

    .carBottom
        margin-top: 20px;
        padding-left: 20px;
        background: #f5f5f5;
        position: relative;
        height: 50px;
        line-height: 50px;

        .price
            color: #ff6700;
            font-size: 20px;
            padding: 0 10px;

        .carBottomRight
            position: relative;
            padding-right: 164px;

        .countBtn
            position: absolute;
            top: 0;
            right: 0;
            margin-left: 20px;
            padding: 0 50px;
            background: #ff6700;
            text-align: center;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            color: #fff;
            user-select: none;
            cursor: pointer;
            display: block

            &:hover
                background: #ff5608

            &:active
                background: #ff6700

    .empty
        text-align: center;

        .emptyIcon
            display: block;
            text-align: center;
            font-size: 100px;
</style>
