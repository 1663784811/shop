<template>
    <div class="person minwidth">
        <ShopHeader></ShopHeader>
        <div class="breadcrumb">
            <div class="container">
                <Breadcrumb separator=">">
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/components/breadcrumb">个人中心</BreadcrumbItem>
                    <BreadcrumbItem>我的订单</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <div class="container">
            <div class="personMain clear_f">
                <div class="f_left">
                    <PersonNav></PersonNav>
                </div>
                <div class="personRight f_right">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <ShopFooter></ShopFooter>
    </div>
</template>

<script>
    import ShopHeader from "./components/ShopHeader";
    import ShopFooter from "./components/ShopFooter";
    import PersonNav from "./person/PersonNav";

    export default {
        name: "Person",
        components: {
            ShopHeader,
            ShopFooter,
            PersonNav
        }
    }
</script>

<style scoped lang="stylus">
    .person
        background: #f5f5f5;
        color: #616161;

        .breadcrumb
            margin: 20px 0;

        .personMain
            position: relative;
            margin-bottom: 50px;


            .personRight
                width: 948px;
                background: #fff;
                border-radius: 6px;
                padding: 36px;


</style>
