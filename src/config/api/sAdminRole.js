import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSAdminRole = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSAdminRole", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSAdminRole = (parameter) => AJAXGET(baseurl + "/admin/findPageSAdminRole", parameter);

/**
 *  查找
 */
export const API_findIdSAdminRole = (parameter) => AJAXGET(baseurl + "/admin/findIdSAdminRole", parameter);


/**
 * 添加
 */
export const API_addSAdminRole = (parameter) => AJAXPOST(baseurl + "/admin/addSAdminRole", parameter);


/**
 *更新
 */
export const API_updateSAdminRole = (parameter) => AJAXPOST(baseurl + "/admin/updateSAdminRole", parameter);


/**
 * 删除
 */
export const API_delSAdminRole = (parameter) => AJAXPOST(baseurl + "/admin/delSAdminRole", parameter);

