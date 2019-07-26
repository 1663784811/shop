import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllSDepartment = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSDepartment", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageSDepartment = (parameter) => AJAXGET(baseurl + "/admin/findPageSDepartment", parameter);

/**
 *  根据ID查找
 */
export const API_findIdSDepartment = (parameter) => AJAXGET(baseurl + "/admin/findIdSDepartment", parameter);

/**
 * 添加 或 更新
 */
export const API_saveSDepartment = (parameter) => AJAXPOST(baseurl + "/admin/saveSDepartment", parameter);

/**
 * 删除
 */
export const API_delSDepartment = (parameter) => AJAXPOST(baseurl + "/admin/delSDepartment", parameter);

