<template>
    <div class="userInfo">
        <div class="faceBox">
            <img src="https://img10.360buyimg.com/cms/jfs/t1/64117/8/2668/255832/5d106848Ea507c7b5/271193f4766fb145.jpg">
        </div>
        <Upload
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="md-cloud-upload" size="52" style="color: #aace8a"/>
                <p>修改头像</p>
            </div>
        </Upload>

        <div class="infoBox clear_f">
            <div class="infoBoxLi textInfoBoxLi f_left">
                <p class="text">昵称: {{userInfo.nickname}}</p>
                <p class="text">账号: {{userInfo.account}}</p>
                <p class="text">修改个人信息</p>
            </div>
            <div class="infoBoxLi textInfoBoxLi f_left">
                <p class="text">账户安全：普通</p>
                <p class="text">绑定手机：{{userInfo.phone}}</p>
                <p class="text">绑定邮箱：{{userInfo.email}}</p>
            </div>
        </div>

        <div class="infoBox clear_f">
            <div class="infoBoxLi f_left">
                <p class="iconP">
                    <Icon type="md-browsers"/>
                </p>
                <div class="textBox">
                    <p class="textP">待支付的订单：0</p>
                    <p class="textP">查看待支付订单</p>
                </div>
            </div>
            <div class="infoBoxLi f_left">
                <p class="iconP">
                    <Icon type="md-browsers"/>
                </p>
                <div class="textBox">
                    <p class="textP">待收货的订单：0</p>
                    <p class="textP">查看待收货订单</p>
                </div>
            </div>
            <div class="infoBoxLi f_left">
                <p class="iconP">
                    <Icon type="md-browsers"/>
                </p>
                <div class="textBox">
                    <p class="textP">待评价商品数：1</p>
                    <p class="textP">查看待评价商品</p>
                </div>
            </div>
            <div class="infoBoxLi f_left">
                <p class="iconP">
                    <Icon type="md-browsers"/>
                </p>
                <div class="textBox">
                    <p class="textP">喜欢的商品：1</p>
                    <p class="textP">查看喜欢的商品</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import {
        GETUSERINFO
    } from '@/assets/common/js/global';


    export default {
        name: "UserInfo",

        data() {
            return {
                userInfo: {}
            }
        },
        methods: {},
        mounted() {
            this.userInfo = GETUSERINFO();
        }


    }
</script>

<style scoped lang="stylus">
    .userInfo
        .faceBox
            width: 150px;
            margin: auto;
            border-radius: 50%;
            overflow: hidden;

            img
                width: 100%;

        .textInfoBoxLi
            padding-left: 20px;

            .text
                margin-bottom: 20px;

        .infoBoxLi
            position: relative;
            width: 50%;
            margin-top: 40px

            .iconP
                position: absolute
                top: 0;
                left: 0;
                font-size: 80px;
                color: #ff6709

            .textBox
                margin-left: 90px;
                padding: 40px 0;

                .textP
                    color: #757575;
                    margin-bottom: 10px;
                    font-size: 16px;
</style>
