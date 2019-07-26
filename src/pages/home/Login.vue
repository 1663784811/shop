<template>
    <div class="login minwidth">
        <SimpleHeader></SimpleHeader>
        <div class="loginMain">
            <div class="container">
                <div class="loginBox" v-show="!type || type==0">
                    <h1 class="title">登录</h1>
                    <div class="row">
                        <Input placeholder="账号/手机号/邮箱" v-model="loginDate.account"/>
                    </div>
                    <div class="row">
                        <Input type="password" placeholder="密码" v-model="loginDate.password"/>
                    </div>
                    <div class="row">
                        <Input placeholder="验证码" v-model="loginDate.code"/>
                    </div>
                    <div class="row">
                        <Button type="success" long :loading="loginLoad" @click="loginFn">登录</Button>
                    </div>
                    <div class="row textRight">
                        <span @click="type = 1">扫码登录</span>
                        <span @click="type = 3">忘了密码？</span>
                        <span @click="type = 2">注册新帐号</span>
                    </div>
                </div>
                <div class="loginBox" v-show="type==1">
                    <h1 class="title">登录</h1>
                    <div class="row">
                        <div class="erCodeBox">

                        </div>
                    </div>
                    <div class="row textRight">
                        <span @click="type = 0">密码登录</span>
                        <span @click="type = 3">忘了密码？</span>
                        <span @click="type = 2">注册新帐号</span>
                    </div>
                </div>
                <div class="loginBox" v-show="type==2">
                    <h1 class="title">用户账号注册</h1>
                    <div class="row">
                        <Input placeholder="账号" v-model="registerDate.account"/>
                    </div>
                    <div class="row">
                        <Input type="password" placeholder="密码" v-model="registerDate.password"/>
                    </div>
                    <div class="row">
                        <Input placeholder="手机号" v-model="registerDate.phone"/>
                    </div>
                    <div class="row">
                        <Input placeholder="邮箱" v-model="registerDate.email"/>
                    </div>

                    <div class="row">
                        <Input placeholder="验证码" v-model="registerDate.code"/>
                    </div>
                    <div class="row">
                        <Button type="success" long @click="registerFn" :loading="registerLoad">注册</Button>
                    </div>
                    <div class="row textRight">
                        <span @click="type = 0">密码登录</span>
                        <span @click="type = 1">扫码登录</span>
                        <span @click="type = 3">忘了密码？</span>
                    </div>
                </div>

                <div class="loginBox" v-show="type==3">
                    <h1 class="title">找回密码</h1>
                    <div class="row">
                        <Input placeholder="手机号"/>
                    </div>
                    <div class="row">
                        <Input placeholder="验证码"/>
                    </div>
                    <div class="row">
                        <Input placeholder="新密码"/>
                    </div>
                    <div class="row">
                        <Button type="success" long>找回密码</Button>
                    </div>
                    <div class="row textRight">
                        <span @click="type = 0">密码登录</span>
                        <span @click="type = 1">扫码登录</span>
                        <span @click="type = 2">注册新帐号</span>
                    </div>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
    import SimpleHeader from "./components/SimpleHeader.vue"
    import {API_REGISTER, API_LOGIN} from "@/shop/config/api/home";
    import {_token_admin, _userinfo_admin} from "@/shop/config/config";
    import {
        SETCOOKIE
    } from '@/assets/common/js/global';

    export default {
        name: "Login",
        components: {
            SimpleHeader
        },
        data() {
            return {
                type: this.$route.params.type,

                loginLoad: false,
                loginDate: {},

                registerLoad: false,
                registerDate: {},
            };
        },
        methods: {

            registerFn: function () {
                this.registerLoad = true;
                API_REGISTER(this.registerDate).then(res => {
                    this.registerLoad = false;
                    this.$Message.success(res.message);
                    let that = this;
                    setTimeout(function () {
                        that.type = 0;
                    }, 1000);
                }).catch(() => {
                    this.registerLoad = false;
                    this.$Message.error("注册失败，请重试！")
                })
            },
            loginFn: function () {
                this.loginLoad = true;
                API_LOGIN(this.loginDate).then(res => {
                    this.loginLoad = false;
                    this.$Message.success("登录成功!");
                    SETCOOKIE(_token_admin, res.token);
                    localStorage.setItem(_userinfo_admin, JSON.stringify(res.data));
                    this.$router.push({
                        path: "/shop/person"
                    });
                }).catch(() => {
                    this.loginLoad = false;
                    this.$Message.error("登录失败，请重试！")
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .loginMain
        background: url("~@/assets/shop/img/loginbg.png") no-repeat;
        background-position: center center;

    .loginBox
        float: right;
        margin: 100px 0;
        width: 410px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px #828282;

        .title
            text-align: center;
            padding: 20px 0;

        .row
            padding: 16px 20px;

            .erCodeBox
                width: 200px;
                height: 200px;
                background: #eee;
                margin: auto;

            span
                margin-left: 10px;
                cursor: pointer;

                &:hover
                    color: #365db3;

        .textRight
            text-align: right;

</style>
