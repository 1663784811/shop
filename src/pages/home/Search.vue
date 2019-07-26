<template>
    <div class="search minwidth">
        <ShopHeader></ShopHeader>
        <div class="breadcrumb">
            <div class="container">
                <Breadcrumb separator=">">
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem>搜索</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <GoodsList></GoodsList>
        <ShopFooter></ShopFooter>
    </div>
</template>

<script>
    import ShopHeader from "./components/ShopHeader";
    import ShopFooter from "./components/ShopFooter";
    import GoodsList from "./components/GoodsList";

    export default {
        name: "Search",
        components: {
            ShopHeader,
            ShopFooter,
            GoodsList
        }
    }
</script>

<style scoped lang="stylus">
    .breadcrumb
        margin: 10px 0;
</style>
