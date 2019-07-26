import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSColor = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSColor", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSColor = (parameter) => AJAXGET(baseurl + "/admin/findPageSColor", parameter);

/**
 *  查找
 */
export const API_findIdSColor = (parameter) => AJAXGET(baseurl + "/admin/findIdSColor", parameter);


/**
 * 添加
 */
export const API_addSColor = (parameter) => AJAXPOST(baseurl + "/admin/addSColor", parameter);


/**
 *更新
 */
export const API_updateSColor = (parameter) => AJAXPOST(baseurl + "/admin/updateSColor", parameter);


/**
 * 删除
 */
export const API_delSColor = (parameter) => AJAXPOST(baseurl + "/admin/delSColor", parameter);

