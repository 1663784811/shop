<template>
    <div class="car minwidth">
        <ShopHeader></ShopHeader>
        <div class="breadcrumb">
            <div class="container">
                <Breadcrumb separator=">">
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem>购物车</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <ShopFooter></ShopFooter>
    </div>
</template>

<script>
    import ShopHeader from "./components/ShopHeader";
    import ShopFooter from "./components/ShopFooter";


    export default {
        name: "Car",
        components: {
            ShopHeader,
            ShopFooter
        }
    }
</script>

<style scoped lang="stylus">
    .breadcrumb
        margin: 10px 0;
</style>
