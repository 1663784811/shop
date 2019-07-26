import {AJAXGET, AJAXPOST} from "../webinfo";
import {_BaseUrl as baseurl} from "../config";


/**
 * 登录
 */
export const API_LOGIN = (parameter) => AJAXPOST(baseurl + "/web/login", parameter);


/**
 * 注册
 */
export const API_REGISTER = (parameter) => AJAXPOST(baseurl + "/web/register", parameter);





