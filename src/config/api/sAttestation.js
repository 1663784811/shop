import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格
 */
export const API_findAllSAttestation = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSAttestation", parameter);


/**
 * 获取表格数据
 */
export const API_findPageSAttestation = (parameter) => AJAXGET(baseurl + "/admin/findPageSAttestation", parameter);

/**
 *  查找
 */
export const API_findIdSAttestation = (parameter) => AJAXGET(baseurl + "/admin/findIdSAttestation", parameter);


/**
 * 添加
 */
export const API_addSAttestation = (parameter) => AJAXPOST(baseurl + "/admin/addSAttestation", parameter);


/**
 *更新
 */
export const API_updateSAttestation = (parameter) => AJAXPOST(baseurl + "/admin/updateSAttestation", parameter);


/**
 * 删除
 */
export const API_delSAttestation = (parameter) => AJAXPOST(baseurl + "/admin/delSAttestation", parameter);

