import {EXPLAINFIELD} from "@/assets/common/js/global.js";

let json = {
    "title": "组",
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
            "title": "组",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "组",
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
            "isShowColumn": true,
            "isWhere": true,
            "javaWhere": "equals",
            "javaType": "date"
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
            "key": "pid",
            "title": "父级",
            "type": "html",
            "length": "45",
            "isRequire": false,
            "regStr": "",
            "message": "父级",
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




