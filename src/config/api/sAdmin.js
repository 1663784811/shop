import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSAdmin = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSAdmin", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSAdmin = (parameter) => AJAXGET(baseurl + "/admin/findPageSAdmin", parameter);

/**
 *  查找
 */
export const API_findIdSAdmin = (parameter) => AJAXGET(baseurl + "/admin/findIdSAdmin", parameter);


/**
 * 添加
 */
export const API_addSAdmin = (parameter) => AJAXPOST(baseurl + "/admin/addSAdmin", parameter);


/**
 *更新
 */
export const API_updateSAdmin = (parameter) => AJAXPOST(baseurl + "/admin/updateSAdmin", parameter);


/**
 * 删除
 */
export const API_delSAdmin = (parameter) => AJAXPOST(baseurl + "/admin/delSAdmin", parameter);

