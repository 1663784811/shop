import {AJAXGET, AJAXPOST} from "../webinfo";

import {_BaseUrl as baseurl} from "../config";

/**
 * 登录
 */
export const loginAdmin = (parameter) => AJAXPOST(baseurl + "/admin/login", parameter);
/**
 * 退出登录
 */
export const logoutAdmin = () => AJAXGET(baseurl + "/admin/logout");
/**
 * 注册
 */
export const registerAdmin = (parameter) => AJAXPOST(baseurl + "/admin/register", parameter);
/**
 * 获取后台菜单树
 */
export const getAdminTree = () => AJAXGET("/shoptree.json");
/**
 * 修改密码
 */
export const updatePassword = (passwordJson) => AJAXPOST(baseurl + "/admin/updatePassword", passwordJson);
/**
 * 修改个人信息
 */
export const updateuserinfo = (passwordJson) => AJAXPOST(baseurl + "/admin/updateuserinfo", passwordJson);
/**
 * 统计
 */
export const findAllTStatistics = (parameter = {sort: "createtime_asc"}) => AJAXGET(baseurl + "/admin/findAllTStatistics", parameter);
/**
 * 访问
 */
export const visit = () => AJAXGET(baseurl + "/visit");
/**
 *  添加或修改产品
 */
export const API_Admin_addProduct = (parameter) => AJAXPOST(baseurl + "/admin/addProductData", parameter, 1);
///==========================================
/**
 * 获取产品列表
 */
export const API_WEB_findPageSProduct = (parameter) => AJAXGET(baseurl + "/web/findPageSProduct", parameter);

/**
 *  产品
 */
export const API_WEB_findIdSProduct = (parameter) => AJAXGET(baseurl + "/web/findIdSProduct", parameter);


/**
 * 退出登录
 */
export const API_WEB_logoutAdmin = () => AJAXGET(baseurl + "/web/logout");

/**
 *  banner
 */
export const API_WEB_findBanner = (parameter) => AJAXGET(baseurl + "/web/findBanner", parameter);

/**
 *  分类
 */
export const API_WEB_findClassification = (parameter) => AJAXGET(baseurl + "/web/findClassification", parameter);

/**
 *  分类
 */
export const API_WEB_findNav = (parameter) => AJAXGET(baseurl + "/web/findNav", parameter);

/**
 *  获取购物车数据
 */
export const API_WEB_findMyCar = (parameter) => AJAXGET(baseurl + "/web/findMyCar", parameter);
/**
 *  获取个人信息
 */
export const API_WEB_UserInfo = (parameter) => AJAXGET(baseurl + "/web/getuserinfo", parameter);
/**
 * 获取商品
 */
export const API_WEB_findProductByColorid = (parameter) => AJAXGET(baseurl + "/web/findProductByColorid", parameter);
/**
 * 获取购物车数据
 */
export const API_WEB_findMyOrder = (parameter) => AJAXGET(baseurl + "/person/findMyOrder", parameter);
/**
 * 添加购物车
 */
export const API_WEB_addCar = (parameter) => AJAXGET(baseurl + "/person/addCar", parameter);
/**
 * 我的地址
 */
export const API_WEB_myAddress = (parameter) => AJAXGET(baseurl + "/person/myAddress", parameter);
/**
 * 地址-添加
 */
export const API_WEB_addMyAddress = (parameter) => AJAXGET(baseurl + "/person/addMyAddress", parameter);
/**
 * 地址-删除
 */
export const API_WEB_delMyAddress = (parameter) => AJAXGET(baseurl + "/person/delMyAddress", parameter);

/**
 * 地址-更新
 */
export const API_WEB_updateMyAddress = (parameter) => AJAXGET(baseurl + "/person/updateMyAddress", parameter);

/**
 * 订单
 */
export const API_WEB_createOrder = (parameter) => AJAXPOST(baseurl + "/person/createOrder", parameter, 1);

