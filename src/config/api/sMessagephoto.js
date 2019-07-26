import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSMessagephoto = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSMessagephoto", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSMessagephoto = (parameter) => AJAXGET(baseurl + "/admin/findPageSMessagephoto", parameter);

/**
 *  查找
 */
export const API_findIdSMessagephoto = (parameter) => AJAXGET(baseurl + "/admin/findIdSMessagephoto", parameter);


/**
 * 添加
 */
export const API_addSMessagephoto = (parameter) => AJAXPOST(baseurl + "/admin/addSMessagephoto", parameter);


/**
 *更新
 */
export const API_updateSMessagephoto = (parameter) => AJAXPOST(baseurl + "/admin/updateSMessagephoto", parameter);


/**
 * 删除
 */
export const API_delSMessagephoto = (parameter) => AJAXPOST(baseurl + "/admin/delSMessagephoto", parameter);

