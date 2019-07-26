import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";

/**
 * 获取所有表格 ==>所有
 */
export const API_findAllSRolePower = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSRolePower", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageSRolePower = (parameter) => AJAXGET(baseurl + "/admin/findPageSRolePower", parameter);

/**
 *  根据ID查找
 */
export const API_findIdSRolePower = (parameter) => AJAXGET(baseurl + "/admin/findIdSRolePower", parameter);

/**
 * 添加 或 更新
 */
export const API_saveSRolePower = (parameter) => AJAXPOST(baseurl + "/admin/saveSRolePower", parameter);

/**
 * 删除
 */
export const API_delSRolePower = (parameter) => AJAXPOST(baseurl + "/admin/delSRolePower", parameter);


/**
 * 外键
 */
export const API_fkSRolePowerFindSPower = (parameter) => AJAXPOST(baseurl + "/admin/fkSRolePowerFindSPower", parameter);
/**
 * 外键
 */
export const API_fkSRolePowerFindSRole = (parameter) => AJAXPOST(baseurl + "/admin/fkSRolePowerFindSRole", parameter);
