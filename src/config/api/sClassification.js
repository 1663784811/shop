import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllSClassification = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSClassification", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageSClassification = (parameter) => AJAXGET(baseurl + "/admin/findPageSClassification", parameter);

/**
 *  根据ID查找
 */
export const API_findIdSClassification = (parameter) => AJAXGET(baseurl + "/admin/findIdSClassification", parameter);

/**
 * 添加 或 更新
 */
export const API_saveSClassification = (parameter) => AJAXPOST(baseurl + "/admin/saveSClassification", parameter);

/**
 * 删除
 */
export const API_delSClassification = (parameter) => AJAXPOST(baseurl + "/admin/delSClassification", parameter);


