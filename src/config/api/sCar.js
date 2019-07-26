import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSCar = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSCar", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSCar = (parameter) => AJAXGET(baseurl + "/admin/findPageSCar", parameter);

/**
 *  查找
 */
export const API_findIdSCar = (parameter) => AJAXGET(baseurl + "/admin/findIdSCar", parameter);


/**
 * 添加
 */
export const API_addSCar = (parameter) => AJAXPOST(baseurl + "/admin/addSCar", parameter);


/**
 *更新
 */
export const API_updateSCar = (parameter) => AJAXPOST(baseurl + "/admin/updateSCar", parameter);


/**
 * 删除
 */
export const API_delSCar = (parameter) => AJAXPOST(baseurl + "/admin/delSCar", parameter);

