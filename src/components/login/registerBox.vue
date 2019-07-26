<template>
    <div class="loginBox">
        <div class="inputRow">
            <Input size="default" v-model="registerData.account" suffix="ios-contact" placeholder="用户名"/>
        </div>
        <div class="inputRow">
            <Input size="default" v-model="registerData.password" suffix="ios-key" type="password" placeholder="密码"/>
        </div>
        <div class="inputRow">
            <Input size="default" v-model="registerData.passworded" suffix="ios-key-outline" type="password"
                   placeholder="确认密码"/>
        </div>
        <div class="inputRow">
            <Input size="default" v-model="registerData.email" suffix="md-mail" placeholder="邮箱"/>
        </div>
        <div class="inputRow">
            <Input size="default" v-model="registerData.emailcode" suffix="ios-information-circle" placeholder="邮箱验证码"/>
        </div>
        <div class="inputRow">
            <Button size="default" type="success" long @click="clickRegister">注册</Button>
        </div>
    </div>
</template>

<script>
    import {AJAXGET} from '@/assets/common/js/global';

    export default {
        name: "loginBox",
        data() {
            return {
                //=====  请求数据
                registerData: {
                    account: "",
                    password: "",
                    passworded: "",
                    email: "",
                    emailcode: ""
                },
                //=====   响应数据
                registerLoding: false
            }
        },
        methods: {
            clickRegister: function () {
                //== 验证数据
                if (this.registerData.account.length < 3) {
                    this.$Message.error("账号不能少于3位！");
                    return;
                }
                if (this.registerData.password.length < 6) {
                    this.$Message.error("密码不能少于6位！");
                    return;
                }
                if (this.registerData.password != this.registerData.passworded) {
                    this.$Message.error("您输入的密码不一致！");
                    return;
                }

                this.registerRequset();
            },

            //======================================================================   请求数据
            registerRequset: function () {
                this.registerLoding = true;
                AJAXGET("/admin/register", this.registerData, 1).then(responseData => {
                    if (responseData.success) {
                        global.SETCOOKIE("token", responseData.token);
                        this.$Message.success(responseData.message);
                        this.$router.push({
                            path: '/admin/index'
                        });
                    } else {
                        this.$Message.error(responseData.message);
                    }
                    this.registerLoding = false;
                }).catch(error => {
                    this.$Message.error("登录失败：" + error);
                    this.registerLoding = false;
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
        margin-bottom: 20px;
        position: relative;
    }

    .loginBox .inputRow .checkImg {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        z-index: 9;
    }

</style>
