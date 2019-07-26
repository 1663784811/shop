import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllSRole = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSRole", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageSRole = (parameter) => AJAXGET(baseurl + "/admin/findPageSRole", parameter);

/**
 *  根据ID查找
 */
export const API_findIdSRole = (parameter) => AJAXGET(baseurl + "/admin/findIdSRole", parameter);

/**
 * 添加 或 更新
 */
export const API_saveSRole = (parameter) => AJAXPOST(baseurl + "/admin/saveSRole", parameter);

/**
 * 删除
 */
export const API_delSRole = (parameter) => AJAXPOST(baseurl + "/admin/delSRole", parameter);

