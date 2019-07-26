import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSUsermessage = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSUsermessage", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSUsermessage = (parameter) => AJAXGET(baseurl + "/admin/findPageSUsermessage", parameter);

/**
 *  查找
 */
export const API_findIdSUsermessage = (parameter) => AJAXGET(baseurl + "/admin/findIdSUsermessage", parameter);


/**
 * 添加
 */
export const API_addSUsermessage = (parameter) => AJAXPOST(baseurl + "/admin/addSUsermessage", parameter);


/**
 *更新
 */
export const API_updateSUsermessage = (parameter) => AJAXPOST(baseurl + "/admin/updateSUsermessage", parameter);


/**
 * 删除
 */
export const API_delSUsermessage = (parameter) => AJAXPOST(baseurl + "/admin/delSUsermessage", parameter);

