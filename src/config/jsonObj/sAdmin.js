import {EXPLAINFIELD} from "@/assets/common/js/global.js";

let json = {
    "title": "管理员",
    "fieldList": [
        {
            "width": "60",
            "key": "id",
            "title": "",
            "type": "selection",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": false,
            "javaWhere": "equals",
            "javaType": "integer"
        }
        , {
            "key": "tid",
            "title": "",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "nickname",
            "title": "昵称",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "昵称",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "account",
            "title": "账号",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "账号",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "password",
            "title": "密码",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "密码",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "salt",
            "title": "盐",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "盐",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "truename",
            "title": "真实姓名",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "真实姓名",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "phone",
            "title": "手机号",
            "type": "html",
            "length": "15",
            "isRequire": false,
            "regStr": "",
            "message": "手机号",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "email",
            "title": "邮箱",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "邮箱",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "canlogintime",
            "title": "可以登录时间",
            "type": "html",
            "length": "26",
            "isRequire": false,
            "regStr": "",
            "message": "可以登录时间",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "yyyy-MM-dd HH:mm:ss",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "date"
        }
        , {
            "key": "createtime",
            "title": "创建时间",
            "type": "html",
            "length": "26",
            "isRequire": false,
            "regStr": "",
            "message": "创建时间",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "yyyy-MM-dd HH:mm:ss",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "date"
        }
        , {
            "key": "lastlogintime",
            "title": "最后登录时间",
            "type": "html",
            "length": "26",
            "isRequire": false,
            "regStr": "",
            "message": "最后登录时间",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "yyyy-MM-dd HH:mm:ss",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "date"
        }
        , {
            "key": "ip",
            "title": "IP",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "IP",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "note",
            "title": "备注",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "备注",
            "controlType": "input",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "status",
            "title": "状态",
            "type": "html",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "状态",
            "controlType": "integer",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "integer"
        }
        , {
            "key": "del",
            "title": "删除",
            "type": "html",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "删除",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "integer"
        }
        , {
            "key": "departmentid",
            "title": "组",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "组",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "like",
            "javaType": "string"
        }
    ]
};

//==== 解释json数据
const obj = EXPLAINFIELD(json);
//=====  标题
export const TitleJson = obj.title;
//===== 添加字段
export const addFieldDataJson = obj.addFieldData;
//===== 修改字段
export const updateFieldDataJson = obj.updateFieldData;
//=====  表头
export const TableHeaderJson = obj.TableHeader;
//=====  搜索字段
export const searchWhereJson = obj.searchWhere;




