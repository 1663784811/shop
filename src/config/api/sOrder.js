import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSOrder = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSOrder", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSOrder = (parameter) => AJAXGET(baseurl + "/admin/findPageSOrder", parameter);

/**
 *  查找
 */
export const API_findIdSOrder = (parameter) => AJAXGET(baseurl + "/admin/findIdSOrder", parameter);


/**
 * 添加
 */
export const API_addSOrder = (parameter) => AJAXPOST(baseurl + "/admin/addSOrder", parameter);


/**
 *更新
 */
export const API_updateSOrder = (parameter) => AJAXPOST(baseurl + "/admin/updateSOrder", parameter);


/**
 * 删除
 */
export const API_delSOrder = (parameter) => AJAXPOST(baseurl + "/admin/delSOrder", parameter);

