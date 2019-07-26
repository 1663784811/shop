//===================系统信息方法
import axios from "axios";
import qs from "qs";
import {GETCOOKIE} from "@/assets/common/js/global";
import {_token_admin, _userinfo_admin} from "./config";


/**
 * Get 请求
 * @param _url URI
 * @param _params 请求参数
 * @param serializer 序列化
 * @returns {Promise<any>}
 */
export const AJAXGET = function (_url, _params = {}, serializer = 0) {
    return AJAXREQUEST(_url, _params, serializer, 'get');
};

/**
 * POST 请求
 * @param _url
 * @param _params
 * @returns {Promise<any>}
 */
export const AJAXPOST = function (_url, _params = {}, serializer = 0) {
    return AJAXREQUEST(_url, _params, serializer, 'post');
};


export const AJAXPOSTFILE = function (_url, _params = {}) {
    let header = GETHEADER();
    header['Content-Type'] = 'multipart/form-data';
    return AJAXREQUEST(_url, _params, 1, 'post', header);
};

/**
 * 请求
 * @param url
 * @param _params
 * @param serializer
 * @param requestType
 * @returns {Promise<any>}
 */
export const AJAXREQUEST = function (url, _params = {}, serializer = 0, requestType, header) {
    return new Promise((resolve, reject) => {
        let axiosLet = null;
        if (serializer === 0) {
            axiosLet = axios({
                url: url,
                method: requestType,
                params: _params,
                headers: header || GETHEADER(),
                paramsSerializer: params => {
                    return qs.stringify(params, {indices: false})
                }
            });
        } else {
            axiosLet = axios({
                url: url,
                method: requestType,
                data: _params,
                headers: GETHEADER(),
            });
        }
        axiosLet.then(res => {
            if (!res.data.code || (res.data.code !== 500)) {
                resolve(res.data);
            } else {
                reject(res.data.message);
            }
        }).catch(error => {
            reject(error);
        });
    });
};

/**
 * 获取请求头
 * @returns {{Accept: string, "Content-Type": string, token: *}}
 */
export const GETHEADER = function () {
    let token = GETCOOKIE(_token_admin);
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'token': token
    }
};

/**
 * 获取个人信息
 */
export const GETUSERINFO = function () {
    let userInfo = window.localStorage.getItem(_userinfo_admin);
    if (userInfo) {
        return JSON.parse(userInfo);
    }
};
