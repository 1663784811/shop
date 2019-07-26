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
      "key":"userid",
      "title":"用户Id",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"用户Id",
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
      "title":"商品ID",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"商品ID",
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
      "key":"product",
      "title":"商品名称",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"商品名称",
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
      "title":"单价",
      "type":"html",
      "length":"10",
      "isRequire":false,
      "regStr":"",
      "message":"单价",
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
      "key":"count",
      "title":"数量",
      "type":"html",
      "length":"10",
      "isRequire":false,
      "regStr":"",
      "message":"数量",
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
      "key":"photo",
      "title":"图片",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"图片",
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
      "key":"productnum",
      "title":"编号",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"编号",
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
      "key":"editionid",
      "title":"版本",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"版本",
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
      "key":"colorid",
      "title":"颜色",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"颜色",
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
      "key":"asetid",
      "title":"套餐",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"套餐",
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




