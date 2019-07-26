import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllSBanner = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSBanner", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageSBanner = (parameter) => AJAXGET(baseurl + "/admin/findPageSBanner", parameter);

/**
 *  根据ID查找
 */
export const API_findIdSBanner = (parameter) => AJAXGET(baseurl + "/admin/findIdSBanner", parameter);

/**
 * 添加 或 更新
 */
export const API_saveSBanner = (parameter) => AJAXPOST(baseurl + "/admin/saveSBanner", parameter);

/**
 * 删除
 */
export const API_delSBanner = (parameter) => AJAXPOST(baseurl + "/admin/delSBanner", parameter);


