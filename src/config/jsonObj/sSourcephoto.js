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
      "key":"path",
      "title":"路径",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"路径",
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
      "title":"名称",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"名称",
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
      "key":"creatime",
      "title":"创建时间",
      "type":"html",
      "length":"26",
      "isRequire":false,
      "regStr":"",
      "message":"创建时间",
      "controlType":"datetime",
      "max":"",
      "min":"",
      "format":"yyyy-MM-dd HH:mm:ss",
      "isShowColumn":true,
      "isWhere":true,
      "javaWhere":"equals",
      "javaType":"date"
    }
    ,{
      "key":"width",
      "title":"",
      "type":"html",
      "length":"10",
      "isRequire":false,
      "regStr":"",
      "message":"",
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
      "key":"height",
      "title":"",
      "type":"html",
      "length":"10",
      "isRequire":false,
      "regStr":"",
      "message":"",
      "controlType":"integer",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":true,
      "isWhere":true,
      "javaWhere":"equals",
      "javaType":"integer"
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




