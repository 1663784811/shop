import {AJAXGET, AJAXPOST} from "../webinfo";

import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSAddress = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSAddress", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSAddress = (parameter) => AJAXGET(baseurl + "/admin/findPageSAddress", parameter);

/**
 *  查找
 */
export const API_findIdSAddress = (parameter) => AJAXGET(baseurl + "/admin/findIdSAddress", parameter);


/**
 * 添加
 */
export const API_addSAddress = (parameter) => AJAXPOST(baseurl + "/admin/addSAddress", parameter);


/**
 *更新
 */
export const API_updateSAddress = (parameter) => AJAXPOST(baseurl + "/admin/updateSAddress", parameter);


/**
 * 删除
 */
export const API_delSAddress = (parameter) => AJAXPOST(baseurl + "/admin/delSAddress", parameter);

