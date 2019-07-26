<template>
    <div class="productList minwidth">
        <ShopHeader></ShopHeader>
        <div class="breadcrumb">
            <div class="container">
                <Breadcrumb separator=">">
                    <BreadcrumbItem to="/shop">首页</BreadcrumbItem>
                    <BreadcrumbItem>{{classificationName|| '列表'}}</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <div class="classify">
            <div class="container">
                <div class="row">
                    <span class="classifyName">分类:</span>
                    <span class="classifyLi" v-for="classification in classificationData"
                          @click="clickClassification(classification.name)">{{classification.name}}</span>
                </div>
                <div class="row">
                    <span class="classifyName">排序:</span>
                    <span class="classifyLi">上架时间<Icon type="md-arrow-dropdown"/></span>
                    <span class="classifyLi">热门<Icon type="md-arrow-dropup"/></span>
                </div>
            </div>
        </div>
        <GoodsList :classification="classificationName" style="min-height: 350px"></GoodsList>
        <ShopFooter></ShopFooter>
    </div>
</template>

<script>
    import ShopHeader from "./components/ShopHeader";
    import ShopFooter from "./components/ShopFooter";
    import GoodsList from "./components/GoodsList";
    import {
        API_WEB_findClassification
    } from "@/config/api/getData";

    export default {
        name: "ProductList",
        components: {
            ShopHeader,
            ShopFooter,
            GoodsList
        },
        data() {
            return {
                pid: '',
                classificationName: this.$route.params.classification,
                classificationData: []
            };
        },
        methods: {
            requestClassification: function () {
                let json = {
                    jsonStr: "{like_string_name: \"" + this.classificationName + "\"}"
                };
                API_WEB_findClassification(json).then(res => {
                    this.classificationData = res;
                });
            },
            clickClassification: function (name) {
                this.classificationName = name;
                this.requestClassification();
            }
        },
        mounted() {
            this.requestClassification();
        }

    }
</script>

<style lang="stylus">
    .breadcrumb
        margin: 10px 0;

        .pageBox
            .page
                text-align: center;

    .classify
        .row
            position: relative;
            background: #f9f9f9;
            padding: 10px 10px 0 60px;
            margin-bottom: 10px;
            border: 1px solid #eee;
            min-height: 40px;

            .classifyName
                position: absolute;
                top: 10px;
                left: 20px;

            .classifyLi
                margin: 0 10px;
                display: inline-block
                margin-bottom: 10px;
                cursor: pointer;

</style>
