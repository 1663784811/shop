import {AJAXGET, AJAXPOST,AJAXPOSTFILE} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 获取所有表格 ==>所有
 */
export const API_findAllSSourcephoto = (parameter = {}) => AJAXGET(baseurl + "/admin/findAllSSourcephoto", parameter);


/**
 * 获取数据 ==>分页
 */
export const API_findPageSSourcephoto = (parameter) => AJAXGET(baseurl + "/admin/findPageSSourcephoto", parameter);

/**
 *  根据ID查找
 */
export const API_findIdSSourcephoto = (parameter) => AJAXGET(baseurl + "/admin/findIdSSourcephoto", parameter);

/**
 * 添加 或 更新
 */
export const API_saveSSourcephoto = (parameter) => AJAXPOST(baseurl + "/admin/saveSSourcephoto", parameter);

/**
 * 删除
 */
export const API_delSSourcephoto = (parameter) => AJAXPOST(baseurl + "/admin/delSSourcephoto", parameter);


/**
 * 上传文件
 */
export const API_uploadFile = (parameter) => AJAXPOSTFILE(baseurl + "/upload/photo", parameter);

