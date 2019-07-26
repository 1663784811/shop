import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSProdutphoto = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSProdutphoto", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSProdutphoto = (parameter) => AJAXGET(baseurl + "/admin/findPageSProdutphoto", parameter);

/**
 *  查找
 */
export const API_findIdSProdutphoto = (parameter) => AJAXGET(baseurl + "/admin/findIdSProdutphoto", parameter);


/**
 * 添加
 */
export const API_addSProdutphoto = (parameter) => AJAXPOST(baseurl + "/admin/addSProdutphoto", parameter);


/**
 *更新
 */
export const API_updateSProdutphoto = (parameter) => AJAXPOST(baseurl + "/admin/updateSProdutphoto", parameter);


/**
 * 删除
 */
export const API_delSProdutphoto = (parameter) => AJAXPOST(baseurl + "/admin/delSProdutphoto", parameter);

