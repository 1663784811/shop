import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSEdition = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSEdition", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSEdition = (parameter) => AJAXGET(baseurl + "/admin/findPageSEdition", parameter);

/**
 *  查找
 */
export const API_findIdSEdition = (parameter) => AJAXGET(baseurl + "/admin/findIdSEdition", parameter);


/**
 * 添加
 */
export const API_addSEdition = (parameter) => AJAXPOST(baseurl + "/admin/addSEdition", parameter);


/**
 *更新
 */
export const API_updateSEdition = (parameter) => AJAXPOST(baseurl + "/admin/updateSEdition", parameter);


/**
 * 删除
 */
export const API_delSEdition = (parameter) => AJAXPOST(baseurl + "/admin/delSEdition", parameter);

