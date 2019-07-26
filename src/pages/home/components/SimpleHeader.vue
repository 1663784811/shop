<template>
    <div class="header">
        <div class="container">
            <div class="headerLeft f_left">
                <div class="logo f_left">
                    <router-link to="/shop">
                        <img class="logoImg" src="~@/assets/shop/img/logo.png" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "simpleHeader"
    }
</script>

<style scoped lang="stylus">
    .header
        padding: 20px 0;
        box-shadow: 0 2px 4px #ececec;
        background: #fff;

        .logo
            height: 40px;

            img
                height: 100%;
</style>
