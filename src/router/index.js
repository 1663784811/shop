import Vue from 'vue'
import VueRouter from 'vue-router'
import shop from './shop';
import {GETCOOKIE} from "@/assets/common/js/global";
import {_token_admin as shopToken} from "@/config/config";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: shop,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

router.beforeEach((to, from, next) => {
    let path = to.path;
    if (
        /\/shop\/admin/.test(path)
        && !/\/shop\/admin\/login/.test(path)
        && !/\/shop\/admin\/register/.test(path)
        && (
            GETCOOKIE(shopToken) === undefined
            || GETCOOKIE(shopToken) === ""
        )
    ) {
        router.push({
            path: "/shop/admin/login"
        });
        return;
    } else {
        if (
            (
                /\/shop\/person/.test(path)
                || /\/shop\/settlement/.test(path)
            )
            && (
                GETCOOKIE(shopToken) === undefined
                || GETCOOKIE(shopToken) === ""
            )) {
            router.push({
                path: "/shop/login"
            });
            return;
        }
    }
    next();
});
export default router;
