<template>
    <div class="shop minwidth">
        <ShopHeader></ShopHeader>
        <div class="pic">
            <Carousel loop class="picBox">
                <CarouselItem v-for="banner in bannerArr">
                    <a :href="banner.url">
                        <div class="imgBox"
                             :style="'background-size: cover; background: url(\''+ banner.photo +'\') no-repeat center center;'">
                        </div>
                    </a>
                </CarouselItem>
            </Carousel>
            <div class="classify">
                <div class="container">
                    <div class="navBox">
                        <ul class="classifyLeftUl">
                            <li class="classifyLeftLi" v-for="(treeNav ,key) in treeNavDate">
                                <router-link :to="'/shop/productList/'+ treeNav.data.name">
                                    <p class="mainclassify">{{treeNav.data.name}}</p>
                                </router-link>
                                <p class="childclassify textOne">
                                    <template>
                                        <router-link :to="'/shop/productList/'+children.name"
                                                     v-for="children in  treeNav.children">
                                            <span class="mainclassifyText">{{children.data.name}}</span>
                                        </router-link>
                                    </template>
                                </p>
                                <div class="childclassifyBox">
                                    <ul class="clear_f" v-if="treeNav.data.productArr">
                                        <li class="f_left childLi" v-for="product in treeNav.data.productArr">
                                            <router-link :to="'/shop/product/'+product.id">
                                                <div class="imgBox">
                                                    <img :src="product.photo">
                                                </div>
                                                <p class="textP textOne">{{product.title}}</p>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
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
    import {
        API_WEB_findBanner,
        API_WEB_findNav,
        API_WEB_findPageSProduct
    } from "@/config/api/getData";
    import {
        CREATETREESTRUCTURE
    } from '@/assets/common/js/global';

    export default {
        name: "Index",
        components: {
            ShopHeader,
            ShopFooter,
            GoodsList
        },
        data() {
            return {
                bannerArr: [],
                navDate: [],
            };
        },
        methods: {
            getFindBannerDate: function () {
                API_WEB_findBanner({jsonStr: "{like_integer_location:\"1\"}"}).then(res => {
                    this.bannerArr = res;
                })
            },
            getClassificationDate: function () {
                API_WEB_findNav().then(res => {
                    this.navDate = res;
                });
            },
            getProductDate: function (id, name) {
                let json = {
                    page: 1,
                    size: 16
                };
                if (name) {
                    json.jsonStr = "{like_string_classification:\"" + name + "\"}";
                }
                API_WEB_findPageSProduct(json).then(res => {
                    let responseData = this.navDate;
                    for (let i = 0; i < responseData.length; i++) {
                        if (responseData[i].tid === id) {
                            responseData[i].productArr = res.data;
                            this.$set(this.navDate, i, responseData[i]);
                        }
                    }
                })
            }
        },
        mounted() {
            this.getClassificationDate();
            this.getFindBannerDate();
        },
        computed: {
            treeNavDate: function () {
                let treeData = [];
                let responseData = this.navDate;
                for (let i = 0; i < responseData.length; i++) {
                    let json = {
                        id: responseData[i].tid,
                        pid: responseData[i].pid,
                        name: responseData[i].name,
                        data: responseData[i]
                    };
                    treeData.push(json)
                }
                let arr = CREATETREESTRUCTURE(treeData);
                for (let i = 0; i < arr.length; i++) {
                    if (!arr[i].data.productArr) {
                        arr[i].data.productArr = [];
                        this.getProductDate(arr[i].id, arr[i].name);
                    }
                }
                return CREATETREESTRUCTURE(treeData);
            }
        }
    }
</script>

<style scoped lang="stylus">
    .pic
        position: relative;
        margin-bottom: 50px;
        margin-top: 20px;
        min-width: 1200px;

        .picBox
            position: absolute
            top: 0;
            left: 0;
            right: 0;

            .imgBox
                height: 500px;

                img
                    max-width none;

        .classify
            height: 500px;
            background: rgba(51, 51, 51, 0.18);

            .navBox
                position: absolute;
                top: 20px;
                left: 0;
                background: #f2f2f2;
                width: 200px;
                border-radius: 10px;

                &:hover
                    border-radius: 10px 0 0 10px;

                .classifyLeftUl
                    position: relative


                    .classifyLeftLi
                        padding: 16px 20px;


                        &:hover
                            background: #fff;

                            .childclassifyBox
                                display: block;
                                overflow: hidden;

                            &:first-child
                                border-radius: 10px 0 0 0;

                            &:last-child
                                border-radius: 0 0 0 10px;

                        .mainclassify
                            font-size: 14px;
                            margin-bottom: 6px;
                            color: #333;

                        .childclassify
                            min-height: 18px;

                            span
                                margin: 0 6px;
                                color: #333;

                        .childclassifyBox
                            position: absolute
                            top: 0;
                            bottom: 0;
                            left: 200px;
                            width: 1000px;
                            background: #fff;
                            padding: 20px;
                            display: none;

                            .childLi
                                width: 230px;
                                height: 84px;
                                overflow: hidden;
                                margin: 10px 10px 10px 0;
                                position: relative;
                                border-radius: 8px;

                                .imgBox
                                    position: absolute;
                                    top: 8px;
                                    left: 8px;
                                    width: 70px;

                                .textP
                                    margin-left: 84px;
                                    line-height: 84px;
                                    color: #333;

                                &:hover
                                    background: #f9f9f9;
</style>
