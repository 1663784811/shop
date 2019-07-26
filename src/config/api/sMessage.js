import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSMessage = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSMessage", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSMessage = (parameter) => AJAXGET(baseurl + "/admin/findPageSMessage", parameter);

/**
 *  查找
 */
export const API_findIdSMessage = (parameter) => AJAXGET(baseurl + "/admin/findIdSMessage", parameter);


/**
 * 添加
 */
export const API_addSMessage = (parameter) => AJAXPOST(baseurl + "/admin/addSMessage", parameter);


/**
 *更新
 */
export const API_updateSMessage = (parameter) => AJAXPOST(baseurl + "/admin/updateSMessage", parameter);


/**
 * 删除
 */
export const API_delSMessage = (parameter) => AJAXPOST(baseurl + "/admin/delSMessage", parameter);

