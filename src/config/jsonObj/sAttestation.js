import {EXPLAINFIELD} from "@/assets/common/js/global.js";

let json ={
  "title": "",
  "fieldList": [

    {
      "width":"60",
      "key":"id",
      "title":"",
      "type":"selection",
      "length":"10",
      "isRequire":false,
      "regStr":"",
      "message":"",
      "controlType":"hidden",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":true,
      "isWhere":false,
      "javaWhere":"equals",
      "javaType":"integer"
    }
    ,{
      "key":"tid",
      "title":"",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"",
      "controlType":"input",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":true,
      "isWhere":true,
      "javaWhere":"like",
      "javaType":"string"
    }
    ,{
      "key":"cardtype",
      "title":"证件类型",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"证件类型",
      "controlType":"input",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":true,
      "isWhere":true,
      "javaWhere":"like",
      "javaType":"string"
    }
    ,{
      "key":"carnumber",
      "title":"证件号",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"证件号",
      "controlType":"input",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":true,
      "isWhere":true,
      "javaWhere":"like",
      "javaType":"string"
    }
    ,{
      "key":"head",
      "title":"正面",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"正面",
      "controlType":"input",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":true,
      "isWhere":true,
      "javaWhere":"like",
      "javaType":"string"
    }
    ,{
      "key":"back",
      "title":"反面",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"反面",
      "controlType":"input",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":true,
      "isWhere":true,
      "javaWhere":"like",
      "javaType":"string"
    }
    ,{
      "key":"userid",
      "title":"用户ID",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"用户ID",
      "controlType":"input",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":true,
      "isWhere":true,
      "javaWhere":"like",
      "javaType":"string"
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




