<template>
    <div class="goods">
        <div class="container">
            <ul class="goodsul clear_f" v-if="productDate.length > 0">
                <li class="goodsli" v-for="product in productDate">
                    <router-link :to="'/shop/product/'+product.id">
                        <div class="goodsBox">
                            <div class="imgBox">
                                <img :src="product.photo">
                            </div>
                            <div class="goodsText">
                                <p class="goodsname textOne">{{product.title}}</p>
                                <p class="note textOne">{{product.subtitle}}</p>
                                <p class="price textOne">{{product.price}} ￥</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="clear_f loddingData" v-else-if="pageStatus === 0">
                <Spin>
                    <Icon type="ios-loading" size=30 class="demo-spin-icon-load"></Icon>
                    <div style="margin-top: 30px; color: rgb(142, 142, 142)">正在加载数据。。。</div>
                </Spin>
            </div>
            <p v-else style="padding: 50px 0; font-size: 18px; text-align: center">暂无数据</p>
        </div>

        <div class="container">
            <div class="pageBox" v-if="total > 0">
                <Page :current="page" :total="total" :pageSize="size" @on-change="onChangePage"/>
            </div>
        </div>
    </div>
</template>

<script>

    import {API_WEB_findPageSProduct} from "@/shop/config/api/getData";

    export default {
        name: "GoodsList",
        props: {
            classification: {
                type: String,
                default() {
                    return "";
                }
            }
        },
        data() {
            return {
                productDate: [],
                total: 0,
                page: 1,
                size: 20,
                ification: this.classification,
                pageStatus: 0
            }
        },
        methods: {
            getProductDate: function () {
                let json = {
                    page: this.page,
                    size: this.size,
                    sort: "id_desc"
                };
                if (this.ification !== "") {
                    json.jsonStr = "{like_string_classification:\"" + this.ification + "\"}";
                }
                this.productDate = [];
                this.pageStatus = 0;
                API_WEB_findPageSProduct(json).then(res => {
                    this.page = res.page;
                    this.size = res.size;
                    this.productDate = res.data;
                    this.total = res.total;
                    this.pageStatus = 1;
                }).catch(() => {
                    this.pageStatus = 1;
                })
            },
            onChangePage: function (page) {
                this.page = page;
                this.getProductDate();
            }
        },
        mounted() {
            this.getProductDate();

        },
        watch: {
            classification: function () {
                this.ification = this.classification;
                this.getProductDate();
            }
        }
    }
</script>

<style scoped lang="stylus">
    .goods
        .goodsul
            margin-left: -12px;

            .goodsli
                float: left;
                width: 230px;
                height: 310px;
                background: #f9f9f9;
                border-radius: 10px;
                margin-left: 12px;
                margin-bottom: 12px;
                margin-top: 0;
                overflow: hidden;
                transition: box-shadow .5s;

                .imgBox
                    padding: 10px;
                    height: 230px;

                    img
                        max-width: 100%;

                .goodsText
                    padding: 0 10px 10px 10px;

                    p
                        text-align: center

                    .goodsname
                        font-size: 14px;
                        color: #333;

                    .note
                        font-size: 12px;
                        color: #777;
                        padding: 6px 0;
                        height: 30px;

                    .price
                        font-size: 12px;
                        color: #d0021b;

                &:hover
                    background: #fff;
                    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);

        .loddingData
            min-height: 300px;


    .pageBox
        text-align: center;
        padding: 50px 0;
</style>
