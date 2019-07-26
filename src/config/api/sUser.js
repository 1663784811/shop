import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSUser = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSUser", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSUser = (parameter) => AJAXGET(baseurl + "/admin/findPageSUser", parameter);

/**
 *  查找
 */
export const API_findIdSUser = (parameter) => AJAXGET(baseurl + "/admin/findIdSUser", parameter);


/**
 * 添加
 */
export const API_addSUser = (parameter) => AJAXPOST(baseurl + "/admin/addSUser", parameter);


/**
 *更新
 */
export const API_updateSUser = (parameter) => AJAXPOST(baseurl + "/admin/updateSUser", parameter);


/**
 * 删除
 */
export const API_delSUser = (parameter) => AJAXPOST(baseurl + "/admin/delSUser", parameter);

