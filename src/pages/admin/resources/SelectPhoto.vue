<template>
    <Modal
            v-model="isShowWindow"
            title="选择图片"
            :mask="true"
            :mask-closable="true"
            width="800px"
    >
        <!--==========         基本表单弹窗        ==========-->
        <div class="searchBox">
            <Input search placeholder="图片名"/>
        </div>
        <template v-if="photoDataArr.length>0">

            <div class="imgListBox clear_f">
                <CheckboxGroup v-model="selectArr">
                    <div v-for="photoData in photoDataArr" class="imgLi">
                        <Checkbox class="chatbox" :label="photoData.path">&nbsp;</Checkbox>
                        <img :src="photoData.path">
                    </div>
                </CheckboxGroup>
            </div>
            <div class="pageBox">
                <Page :total="total" @on-change="onChangePageFn"/>
            </div>
        </template>
        <div v-else style="text-align: center;padding: 40px 0;">
            暂无数据
        </div>
        <div slot="footer">
            <Button type="success" size="large" long :loading="isLoading" @click="submitForm">选择</Button>
        </div>
    </Modal>
</template>

<script>
    import {
        API_findPageSSourcephoto
    } from "@/config/api/sSourcephoto";

    export default {
        name: "SelectPhoto",
        data() {
            return {
                isShowWindow: false,
                isLoading: false,
                waterFallData: [],
                page: 1,
                size: 20,
                total: 0,
                photoDataArr: [],
                selectArr: []
            }
        },
        methods: {
            onChangePageFn: function (page) {
                this.page = page;
                this.loadingList();
            },
            submitForm: function () {
                this.$emit("clickSaveBtn", this.selectArr);
            },
            setShowWindow: function (is = false) {
                this.isShowWindow = is;
            },
            setSelectArr: function (selectArr = []) {
                this.selectArr = selectArr;
            },
            /**
             * 加载列表数据
             */
            loadingList: function () {
                this.waterFallData = [];
                let json = {
                    page: this.page,
                    size: this.size,
                    total: this.total
                };
                API_findPageSSourcephoto(json).then(res => {
                    this.page = res.page;
                    this.size = res.size;
                    this.total = res.total;
                    this.photoDataArr = res.data;
                }).catch(res => {
                    this.$Message.error("加载数据失败");
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .imgListBox
        padding-top: 20px;
        text-align: center;

        .imgLi
            width: 100px;
            display: inline-block;
            margin: 6px;
            padding: 10px;
            border: 1px solid #eee;
            position: relative;

            .chatbox
                position: absolute;
                top: -10px;
                right: -22px;

    .searchBox
        width: 250px;
        margin: auto;

    .pageBox
        margin-top: 10px;
        text-align: center;

</style>
