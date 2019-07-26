import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSOrderproduct = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSOrderproduct", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSOrderproduct = (parameter) => AJAXGET(baseurl + "/admin/findPageSOrderproduct", parameter);

/**
 *  查找
 */
export const API_findIdSOrderproduct = (parameter) => AJAXGET(baseurl + "/admin/findIdSOrderproduct", parameter);


/**
 * 添加
 */
export const API_addSOrderproduct = (parameter) => AJAXPOST(baseurl + "/admin/addSOrderproduct", parameter);


/**
 *更新
 */
export const API_updateSOrderproduct = (parameter) => AJAXPOST(baseurl + "/admin/updateSOrderproduct", parameter);


/**
 * 删除
 */
export const API_delSOrderproduct = (parameter) => AJAXPOST(baseurl + "/admin/delSOrderproduct", parameter);

