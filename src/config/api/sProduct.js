import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSProduct = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSProduct", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSProduct = (parameter) => AJAXGET(baseurl + "/admin/findPageSProduct", parameter);

/**
 *  查找
 */
export const API_findIdSProduct = (parameter) => AJAXGET(baseurl + "/admin/findIdSProduct", parameter);


/**
 * 添加
 */
export const API_addSProduct = (parameter) => AJAXPOST(baseurl + "/admin/addSProduct", parameter);


/**
 *更新
 */
export const API_updateSProduct = (parameter) => AJAXPOST(baseurl + "/admin/updateSProduct", parameter);


/**
 * 删除
 */
export const API_delSProduct = (parameter) => AJAXPOST(baseurl + "/admin/delSProduct", parameter);



