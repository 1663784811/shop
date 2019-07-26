<template>
    <div class="address">
        <h2 class="title">收货地址 <span class="addAddress" @click="clickAddBtn"><Icon type="md-add-circle"/></span></h2>
        <ul v-if="addressArr.length >0">
            <li class="textOne messageLi clear_f" v-for="(address ,key ) in addressArr">
                <div class="messageBox clear_f">
                    <span class="textNum">{{key+1}}</span>
                    <span class="name">{{address.name}}</span>
                    <span class="phone">{{address.phone}}</span>
                    <span class="addressText">{{address.city}}{{address.address}}</span>
                    <span class="edit" @click="showEdit(address)"><Icon type="ios-brush"/></span>
                    <span class="delete" @click="clickDelBtn(address)"><Icon type="md-trash"/></span>
                </div>
            </li>
        </ul>
        <p v-else style="text-align: center;padding:50px 0;">暂无数据</p>
        <!--====  添加  ====-->
        <BaseWindow ref="refAddBaseWindow"
                    :title="addTitle"
                    :fieldData="addFieldData"
                    @submitForm="addSubmitForm"
        ></BaseWindow>
        <!--====  修改  ====-->
        <BaseWindow ref="refUpdateBaseWindow"
                    :title="updateTitle"
                    :fieldData="updateFieldData"
                    @submitForm="updateSubmitForm"
        ></BaseWindow>
        <!--======   删除提示   ======-->
        <Modal v-model="isDelInfo" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>刪除数据</span>
            </p>
            <div style="text-align:center">
                <p>是否要刪除?</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="isDelLoading" @click="delData">刪除</Button>
            </div>
        </Modal>

    </div>
</template>

<script>
    import {
        TitleJson,
        addFieldDataJson,
        updateFieldDataJson,
    } from "@/shop/config/jsonObj/sAddress";
    import BaseWindow from '@/components/admin/BaseWindow';
    import {
        API_WEB_myAddress,
        API_WEB_addMyAddress,
        API_WEB_delMyAddress,
        API_WEB_updateMyAddress
    } from "@/shop/config/api/getData";

    export default {
        name: "Address",
        components: {
            BaseWindow
        },
        data() {
            return {
                //======================  基础数据
                addTitle: TitleJson,
                addFieldData: addFieldDataJson,
                addFieldDataT: [],//添加字段数据

                updateTitle: TitleJson,
                updateFieldData: updateFieldDataJson,
                updateFieldDataT: [],//修改字段数据

                isDelInfo: false,
                isDelLoading: false,

                page: 1,
                size: 30,
                addressArr: [],

                selectData: {}

            }
        },
        methods: {
            clickAddBtn: function () {
                this.addFieldDataT = this.addFieldData;
                this.$refs.refAddBaseWindow.operationWindow(true);
            },
            requestMyAddress() {
                API_WEB_myAddress({page: this.page, size: this.size, sort: "id_desc"}).then(res => {
                    this.page = res.page;
                    this.size = res.size;
                    this.addressArr = res.data;
                })
            },
            //=== 添加提交表单数据
            addSubmitForm: function (formData) {
                this.submitData = formData;
                this.addSubmitDataFn();
            },

            showEdit: function (obj) {
                this.$refs.refUpdateBaseWindow.setfromData(obj);
                this.$refs.refUpdateBaseWindow.operationWindow(true);
            },

            //=== 修改提交表单数据
            updateSubmitForm: function (formData) {
                this.$refs.refUpdateBaseWindow.setLoading(true);
                API_WEB_updateMyAddress(formData).then(res => {
                    this.$refs.refUpdateBaseWindow.operationWindow(false);
                    this.$refs.refUpdateBaseWindow.setfromData({});
                    this.$refs.refUpdateBaseWindow.setLoading(false);
                    this.$Message.success("修改成功");
                    this.requestMyAddress();
                }).catch(() => {
                    this.$refs.refUpdateBaseWindow.setLoading(false);
                    this.$Message.error("修改失败");
                })
            },
            clickDelBtn: function (obj) {
                this.selectData = [obj];
                this.isDelInfo = true;
            },
            //执行删除
            delData: function () {
                this.isDelLoading = true;
                let selectData = this.selectData;
                let idArr = [];
                for (let i = 0; i < selectData.length; i++) {
                    idArr.push(selectData[i].id);
                }
                API_WEB_delMyAddress({idArr: idArr}).then(res => {
                    this.$Message.success(res.message);
                    this.isDelInfo = false;
                    this.isDelLoading = false;
                    this.requestMyAddress();
                }).catch(res => {
                    this.isDelLoading = false;
                    this.$Message.error("刪除失败" + res);
                })
            },

            addSubmitDataFn: function () {
                this.$refs.refAddBaseWindow.setLoading(true);
                API_WEB_addMyAddress(this.submitData).then(res => {
                    this.$refs.refAddBaseWindow.operationWindow(false);
                    this.$refs.refAddBaseWindow.setfromData({});
                    this.$refs.refAddBaseWindow.setLoading(false);
                    this.$Message.success("添加成功");
                    this.addFieldDataT = [];
                    this.requestMyAddress();
                }, errorData => {
                    this.$Message.error("添加失败" + errorData);
                    this.$refs.refAddBaseWindow.setLoading(false);
                });
            },

        },
        mounted() {
            this.requestMyAddress();
        },
    }
</script>

<style scoped lang="stylus">
    .address
        margin-bottom: 50px;

        .title
            margin: 0;
            font-size: 30px;
            font-weight: 400;
            line-height: 68px;
            color: #757575;
            position: relative;

            .addAddress
                position: absolute;
                right: 10px;
                color: #19be6b
                cursor: pointer;

        .messageLi
            border-bottom: 1px solid #eee;

            .messageBox
                padding: 10px 50px 10px 14px;
                position: relative;


                &:hover
                    background: #f5f5f5;

            .text
                color: #757575;

            .textNum
                margin-right: 10px;
                font-weight: bold;
                color: #757575;

            .name
                width: 78px;
                display: inline-block;
                margin-right: 10px;

            .phone
                width: 78px;
                display: inline-block;
                margin-right: 10px;

            .addressText
                width: 78px;
                display: inline-block;
                margin-right: 10px;

            .edit
                position: absolute;
                top: 8px;
                right: 38px;
                cursor: pointer

            .delete
                position: absolute;
                top: 8px;
                right: 10px;
                cursor: pointer
</style>
