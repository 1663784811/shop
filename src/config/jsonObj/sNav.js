import {EXPLAINFIELD} from "@/assets/common/js/global.js";
import {_BaseUrl} from "@/config/config";

let json ={
  "title": "菜单",
  "fieldList": [
    {
      "width":"60",
      "key":"id",
      "title":"id",
      "type":"selection",
      "length":"10",
      "isRequire":false,
      "regStr":"",
      "message":"id",
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
      "title":"tid",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"tid",
      "controlType":"hidden",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":false,
      "isWhere":false,
      "javaWhere":"like",
      "javaType":"string"
    }
    ,{
      "key":"pid",
      "title":"父级",
      "type":"html",
      "length":"45",
      "isRequire":false,
      "regStr":"",
      "message":"父级",
      "url": _BaseUrl + "/admin/findAllSNav",
      "controlType":"drawer",
      "max":"",
      "min":"",
      "format":"",
      "isShowColumn":false,
      "isWhere":false,
      "javaWhere":"like",
      "javaType":"string"
    }
    ,{
      "key":"name",
      "title":"名称",
      "slot":"name",
      // "type":"html",
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
      "key":"mark",
      "title":"标识",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"标识",
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
      "key":"location",
      "title":"位置",
      "type":"html",
      "length":"10",
      "isRequire":false,
      "regStr":"",
      "message":"位置",
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
      "title":"备注",
      "type":"html",
      "length":"255",
      "isRequire":false,
      "regStr":"",
      "message":"备注",
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




