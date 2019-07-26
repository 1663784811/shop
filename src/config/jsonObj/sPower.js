import {EXPLAINFIELD} from "@/assets/common/js/global.js";
import {_BaseUrl} from "../config";

let json = {
    "title": "权限管理",
    "fieldList": [
        {
            "width": "60",
            "key": "id",
            "title": "id",
            "type": "selection",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "id",
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
            "key": "name",
            "title": "名称",
            // "type": "html",
            "slot": "name",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "名称",
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
            "key": "url",
            "title": "URL",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "URL",
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
            "key": "icon",
            "title": "图标",
            "type": "html",
            "length": "255",
            "isRequire": false,
            "regStr": "",
            "message": "图标",
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
            "key": "pid",
            "title": "父级",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "父级",
            "url": _BaseUrl + "/admin/findAllSPower",
            "controlType": "drawer",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "like",
            "javaType": "string"
        }
        , {
            "key": "code",
            "title": "授权码",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "授权码",
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
            "key": "createtime",
            "title": "创建时间",
            "type": "html",
            "length": "19",
            "isRequire": false,
            "regStr": "",
            "message": "创建时间",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "yyyy-MM-dd HH:mm:ss",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "equals",
            "javaType": "date"
        }
        , {
            "key": "del",
            "title": "是否删除",
            "type": "html",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "是否删除",
            "controlType": "hidden",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": false,
            "isWhere": false,
            "javaWhere": "equals",
            "javaType": "integer"
        }
        , {
            "key": "powertype",
            "title": "类型",
            "type": "html",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "类型",
            "controlType": "radio",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "integer",
            "selectArr": [
                {
                    "key": 1,
                    "title": "菜单"
                },
                {
                    "key": 2,
                    "title": "按钮"
                }
            ]
        }
        , {
            "key": "status",
            "title": "状态",
            "type": "html",
            "length": "10",
            "isRequire": false,
            "regStr": "",
            "message": "状态",
            "controlType": "radio",
            "max": "",
            "min": "",
            "format": "",
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "integer",
            "selectArr": [
                {
                    "key": 1,
                    "title": "正常"
                },
                {
                    "key": 2,
                    "title": "锁定"
                }
            ]
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
            "key": "tid",
            "title": "tid",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "tid",
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




