<template>
    <div class="currencyTabBox">
        <div class="leftDataBox">
            <BasePanel title="组">
                <TDepartmentTree
                        @clickNode="clickNode"
                ></TDepartmentTree>
            </BasePanel>
        </div>
        <div class="mainDataBox">
            <!--===========     基础操作     ==============-->
            <BaseOperation
                    :searchWhere="searchWhere"
                    @clickAddBtn="clickAddBtn"
                    @clickUpdateBtn="clickUpdateBtn"
                    @clickDelBtn="clickDelBtn"
                    @clickSearchBtn="clickSearchBtn"
                    @changeSearchBtn="changeSearchBtn"
            ></BaseOperation>
            <!--===========    表格数据     ==============-->
            <div class="tableBox scroll">
                <Table size="small" ref="adminTable"
                       :columns="TableHeader"
                       :data="tableData"
                       :loading="tableLoading"
                       @on-selection-change="selectionChange"
                       @on-row-click="clickRow"
                       highlight-row
                ></Table>
            </div>
            <!--===========    分页     ==============-->
            <div class="pageBox">
                <Page show-total
                      show-elevator
                      show-sizer
                      :total="total"
                      :page-size="requestTableData.size"
                      @on-change="clickChangePage"
                      @on-page-size-change="clickChangeSize"
                />
            </div>
        </div>
        <div class="rightDataBox">
            <BasePanel title="权限">
                <span class="titleRight"
                      slot="titleRight"
                      @click="clickBasePanelAdd">
                      <Icon type="md-add-circle"/>
                </span>
                <BaseTreeCheckbox
                        :ajaxObj="treeAjaxObj"
                        ref="treecheckbox"
                ></BaseTreeCheckbox>
            </BasePanel>
        </div>
        <!--===========    操作弹出层     ==============-->
        <!--====  添加  ====-->
        <BaseWindow ref="winRef"
                    :show.sync="winShow"
                    :title="winTitle"
                    :fieldData="winFieldData"
                    :valueData="winValueData"
                    :saveLoadding="winLoadding"
                    @submitForm="submitForm"
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
        <PanelTreeCheckbox
                :ajaxObj="panelTreeAjax"
                :dataArr="panelCheckboxValue"
                ref="panelTreeCheckbox"
                title="修改权限"
                @clickSaveBtn="clickSaveAddBtn"
        ></PanelTreeCheckbox>
    </div>
</template>

<script>
    import '@/assets/admin/css/adminPage.css';
    import BaseOperation from '@/components/admin/BaseOperation';
    import BaseWindow from '@/components/BaseWindow';
    import BaseRightList from '@/components/admin/BaseRightList';
    import BasePanel from '@/components/admin/BasePanel';
    import BaseTreeCheckbox from '@/components/admin/BaseTreeCheckbox';
    import PanelTreeCheckbox from '@/components/common/PanelTreeCheckbox';
    import TDepartmentTree from '@/pages/tree/TDepartmentTree.vue';
    import {
        TitleJson,
        addFieldDataJson,
        updateFieldDataJson,
        TableHeaderJson,
        searchWhereJson
    } from "@/config/jsonObj/sRole";
    import {
        API_findPageSRole,
        API_delSRole,
        API_saveSRole
    } from "@/config/api/sRole";
    import {
        API_findAllSPower
    } from "@/config/api/sPower";
    import {
        API_fkSRolePowerFindSPower
    } from "@/config/api/sRolePower";
    import {
        API_updateTRolePowerArray,
    } from "@/config/api/tRolePower";

    export default {
        name: "TRole",
        components: {
            BaseOperation,
            BaseWindow,
            BaseRightList,
            BasePanel,
            BaseTreeCheckbox,
            PanelTreeCheckbox,
            TDepartmentTree
        },
        data() {
            return {
                winTitle: " ",
                winShow: false,
                winFieldData: [],
                winValueData: {},
                winLoadding: false,

                treeAjaxObj: API_fkSRolePowerFindSPower,
                panelTreeAjax: API_findAllSPower,
                //======================  基础数据
                addTitle: TitleJson,
                addFieldData: addFieldDataJson,
                addFieldDataT: [],//添加字段数据

                updateTitle: TitleJson,
                updateFieldData: updateFieldDataJson,
                updateFieldDataT: [],//修改字段数据

                TableHeader: TableHeaderJson,
                searchWhere: searchWhereJson,

                //=======================    请求参数
                requestTableData: {//请求表格数据参数
                    page: 1,
                    size: 30,
                    sort: "id_desc"
                },
                submitData: {},//添加修改提交数据,
                //=================     响应数据
                tableLoading: true,
                tableData: [],      //数据
                total: 0,       //总数
                selectData: [],      //已经选择的数据
                //==========  删除
                isDelInfo: false,
                isDelLoading: false,
                //====== 树数据
                baseListData: [],
                rightObjData: {},
                selectRowData: {},
                panelCheckboxValue: []
            }
        },
        created() {
            //====  数据
            this.requestTableDataFn();
        },
        methods: {
            //多选
            selectionChange: function (data) {
                this.selectData = data;
            },
            //单选
            clickRow: function (data) {
                this.selectRowData = data;
                this.$refs.treecheckbox.ajaxRequest(this.selectRowData);
            },
            //=================================================== 操作  START
            //点击添加
            clickAddBtn: function () {
                this.winShow = true;
                this.winTitle = this.addTitle;
                this.winFieldData = this.addFieldData;
                this.winValueData = {};
            },
            //点击修改
            clickUpdateBtn: function () {
                let selectData = this.selectData;
                if (selectData.length === 1) {
                    this.winShow = true;
                    this.winValueData = selectData[0];
                    this.winTitle = this.updateTitle;
                    this.winFieldData = this.updateFieldData;
                } else if (selectData.length > 1) {
                    this.$Message.warning("请选择一条数据");
                } else {
                    this.$Message.warning("请选择数据");
                }
            },
            //点击删除
            clickDelBtn: function () {
                let selectData = this.selectData;
                if (selectData.length > 0) {
                    this.isDelInfo = true;
                } else {
                    this.$Message.warning("请选择数据");
                }
            },
            //执行删除
            delData: function () {
                let idArr = [];
                let selectData = this.selectData;
                for (let i = 0; i < selectData.length; i++) {
                    idArr.push(selectData[i].id);
                }
                this.delIdFn({idArr: idArr});
            },
            //点击搜索
            clickSearchBtn: function () {
                this.requestTableDataFn();
            },
            //改变搜索条件
            changeSearchBtn: function (obj) {
                if (obj.selectValue && obj.selectValue !== "") {
                    this.requestTableData.jsonStr = '{' + obj.selectValue + ':"' + obj.searchData + '"}';
                } else {
                    this.requestTableData.jsonStr = "";
                }
            },
            clickBasePanelAdd: function () {
                let row = this.selectRowData;
                if (row.tid) {
                    this.panelCheckboxValue = this.$refs.treecheckbox.getTreeData();
                    this.$refs.panelTreeCheckbox.setShow(true);
                    this.$refs.panelTreeCheckbox.ajaxRequest();
                } else {
                    this.$Message.warning("请选择角色！")
                }
            },
            //=================================================== 操作  END
            //=== 添加修改提交表单数据
            submitForm: function (formData) {
                this.submitData = formData;
                this.submitDataFn();
            },
            //===== 分页
            clickChangePage: function (page) {
                this.requestTableData.page = page;
                this.requestTableDataFn();
            },
            clickChangeSize: function (size) {
                this.requestTableData.size = size;
                this.requestTableDataFn();
            },
            //点击节点
            clickNode: function (nodeData) {
                if (nodeData.tid && nodeData.tid !== "" && nodeData.tid !== "ROOT") {
                    this.requestTableData.jsonStr = '{equals_string_departmentid:"' + nodeData.tid + '"}';
                } else {
                    this.requestTableData.jsonStr = '';
                }
                this.requestTableDataFn();
            },
            //======================================================================   请求数据
            //表格数据
            requestTableDataFn: function (successCallBack, errorCallBack) {
                this.tableData = [];
                this.selectData = [];
                this.tableLoading = true;
                this.baseListData = [];
                API_findPageSRole(this.requestTableData).then(responseData => {
                    if (responseData.data) {
                        this.tableData = responseData.data;
                        this.total = responseData.total;
                        successCallBack ? successCallBack() : "";
                    } else {
                        this.$Message.error("查询数据失败:" + responseData.message);
                    }
                    this.tableLoading = false;
                }, errorData => {
                    this.$Message.error("查询数据失败" + errorData);
                    this.tableLoading = false;
                    errorCallBack ? errorCallBack(errorData) : "";
                });
            },
            //新增修改数据请求
            submitDataFn: function () {
                this.winLoadding = true;
                API_saveSRole(this.submitData).then(() => {
                    this.winShow = false;
                    this.winLoadding = false;
                    this.$Message.success("保存成功");
                    this.addFieldDataT = [];
                    this.requestTableDataFn();
                }, errorData => {
                    this.$Message.error("保存失败" + errorData);
                    this.winLoadding = false;
                });
            },
            /**
             * 根ID删除数据
             */
            delIdFn: function (sendObj) {
                this.isDelLoading = true;
                API_delSRole(sendObj).then(responseData => {
                    this.$Message.success(responseData.message);
                    this.isDelInfo = false;
                    this.isDelLoading = false;
                    this.requestTableDataFn();
                }, errorData => {
                    this.isDelLoading = false;
                    this.$Message.error("刪除失败" + errorData);
                });
            },
            /**
             * 添加权限
             */
            clickSaveAddBtn: function (dataArr) {


                this.$refs.panelTreeCheckbox.setLoading(true);
                this.$refs.panelTreeCheckbox.setShow(true);
                let jsonArr = [];
                let json = {};
                json.roleid = this.selectRowData.id;
                for (let i = 0; i < dataArr.length; i++) {
                    jsonArr.push(dataArr[i].data.id);
                }
                json.poweridArr = jsonArr;
                API_updateTRolePowerArray(json).then(() => {
                    this.$Message.success("修改成功");
                    this.$refs.panelTreeCheckbox.setShow();
                    this.$refs.panelTreeCheckbox.setLoading();
                    this.$refs.treecheckbox.ajaxRequest(this.selectRowData);
                }).catch(res => {
                    this.$Message.error("修改失败:" + res);
                    this.$refs.panelTreeCheckbox.setLoading();
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .currencyTabBox
        padding 0px;
        height 100%
        overflow hidden;
        position: relative;

        .tableBox
            padding: 0 10px 10px 10px
            height: calc(100% - 46px);
            overflow auto

        .mainDataBox
            height: 100%;
            margin-right: 200px;
            margin-left: 200px;
            position: relative;

            .tableBox
                padding: 0 10px 10px 10px;
                height calc(100% - 96px);
                overflow auto;

            .pageBox
                width: 100%;
                min-height: 50px;
                text-align right;
                padding: 10px;
                border-top: 1px solid #eee;
                background: #fff;
                z-index: 10;
                position: absolute;
                bottom: 0;

        .rightDataBox
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            overflow: hidden;
            background: #fff;
            width: 200px;
            border-left: 1px solid #eee;

        .leftDataBox
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            overflow: hidden;
            background: #fff;
            width: 200px;
            border-right: 1px solid #eee;

    .titleRight
        cursor: pointer;
</style>
