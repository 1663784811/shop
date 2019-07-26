import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSAset = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSAset", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSAset = (parameter) => AJAXGET(baseurl + "/admin/findPageSAset", parameter);

/**
 *  查找
 */
export const API_findIdSAset = (parameter) => AJAXGET(baseurl + "/admin/findIdSAset", parameter);


/**
 * 添加
 */
export const API_addSAset = (parameter) => AJAXPOST(baseurl + "/admin/addSAset", parameter);


/**
 *更新
 */
export const API_updateSAset = (parameter) => AJAXPOST(baseurl + "/admin/updateSAset", parameter);


/**
 * 删除
 */
export const API_delSAset = (parameter) => AJAXPOST(baseurl + "/admin/delSAset", parameter);

