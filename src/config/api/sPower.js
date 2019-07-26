import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllSPower = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSPower", parameter);
/**
 * 获取数据 ==>分页
 */
export const API_findPageSPower = (parameter) => AJAXGET(baseurl + "/admin/findPageSPower", parameter);

/**
 *  根据ID查找
 */
export const API_findIdSPower = (parameter) => AJAXGET(baseurl + "/admin/findIdSPower", parameter);

/**
 * 添加 或 更新
 */
export const API_saveSPower = (parameter) => AJAXPOST(baseurl + "/admin/saveSPower", parameter);

/**
 * 删除
 */
export const API_delSPower = (parameter) => AJAXPOST(baseurl + "/admin/delSPower", parameter);

