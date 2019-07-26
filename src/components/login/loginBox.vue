<template>
    <div class="loginBox">
        <div class="inputRow">
            <Input size="default" v-model="loginData.account" suffix="ios-contact" placeholder="用户名"/>
        </div>
        <div class="inputRow">
            <Input size="default" v-model="loginData.password" suffix="ios-key" type="password" placeholder="密码"/>
        </div>
        <div class="inputRow">
            <Input size="default" v-model="loginData.checkCode" placeholder="验证码"/>
            <img ref="checkImg" @click="clickCheckImg" class="checkImg"
                 src="http://www.51zxw.net/login/Shared/CreateValidateCode?index=2">
        </div>
        <div class="inputRow">
            <Button size="default" type="success" long :loading="loginLoding" @click="clickLogin">登录</Button>
        </div>
    </div>
</template>

<script>
    import {ajaxPost} from '@/assets/common/js/global';

    export default {
        name: "loginBox",
        data() {
            return {
                //=====  请求数据
                loginData: {
                    account: "",
                    password: "",
                    checkCode: ""
                },
                //=====   响应数据
                loginLoding: false
            }
        },
        methods: {
            clickCheckImg: function () {
                this.$refs.checkImg.src = "http://www.51zxw.net/login/Shared/CreateValidateCode?index=" + new Date().getTime();
            },
            clickLogin: function () {
                this.loginRequset();
            },
            //======================================================================   请求数据
            loginRequset: function () {
                this.loginLoding = true;
                ajaxPost("/admin/login", this.loginData, 1).then(res => {
                    if (res.success) {
                        localStorage.setItem("userInfo", JSON.stringify(res.data));
                        global.SETCOOKIE("token", res.token);
                        this.$Message.success("登录成功");
                        this.$router.push({
                            path: '/admin/index'
                        });
                    } else {
                        this.$Message.error(res.message);
                    }
                    this.loginLoding = false;
                }).catch(error => {
                    this.$Message.error("登录失败：" + error);
                    this.loginLoding = false;
                })
            }
        }
    }
</script>

<style scoped>
    .loginBox {
        min-height: 200px;
        padding: 20px;
    }

    .loginBox .inputRow {
        margin: 34px 0;
        position: relative;
    }

    .loginBox .inputRow .checkImg {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        width: 64px;
        height: 32px;
    }
</style>
