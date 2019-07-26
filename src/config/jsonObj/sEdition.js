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
      "key":"name",
      "title":"版本名称",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"版本名称",
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
      "key":"price",
      "title":"价格",
      "type":"html",
      "length":"10",
      "isRequire":false,
      "regStr":"",
      "message":"价格",
      "controlType":"integer",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":true,
      "isWhere":true,
      "javaWhere":"equals",
      "javaType":"integer"
    }
    ,{
      "key":"note",
      "title":"",
      "type":"html",
      "length":"255",
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
      "key":"productid",
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




