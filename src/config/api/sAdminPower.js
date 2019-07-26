import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSAdminPower = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSAdminPower", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSAdminPower = (parameter) => AJAXGET(baseurl + "/admin/findPageSAdminPower", parameter);

/**
 *  查找
 */
export const API_findIdSAdminPower = (parameter) => AJAXGET(baseurl + "/admin/findIdSAdminPower", parameter);


/**
 * 添加
 */
export const API_addSAdminPower = (parameter) => AJAXPOST(baseurl + "/admin/addSAdminPower", parameter);


/**
 *更新
 */
export const API_updateSAdminPower = (parameter) => AJAXPOST(baseurl + "/admin/updateSAdminPower", parameter);


/**
 * 删除
 */
export const API_delSAdminPower = (parameter) => AJAXPOST(baseurl + "/admin/delSAdminPower", parameter);

