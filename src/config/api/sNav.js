import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllSNav = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSNav", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageSNav = (parameter) => AJAXGET(baseurl + "/admin/findPageSNav", parameter);

/**
 *  根据ID查找
 */
export const API_findIdSNav = (parameter) => AJAXGET(baseurl + "/admin/findIdSNav", parameter);

/**
 * 添加 或 更新
 */
export const API_saveSNav = (parameter) => AJAXPOST(baseurl + "/admin/saveSNav", parameter);

/**
 * 删除
 */
export const API_delSNav = (parameter) => AJAXPOST(baseurl + "/admin/delSNav", parameter);


