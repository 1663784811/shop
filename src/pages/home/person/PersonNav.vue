<template>

    <div class="personNav">
        <h2>订单中心</h2>
        <ul>
            <li>
                <router-link class="lia" to="/shop/person/order">我的订单</router-link>
            </li>
            <li>
                <router-link class="lia" to="/shop/person/coupon">优惠券</router-link>
            </li>
        </ul>
        <h2>个人中心</h2>
        <ul>
            <li>
                <router-link class="lia" to="/shop/person">我的个人中心</router-link>
            </li>
            <li>
                <router-link class="lia" to="/shop/person/car">我的购物车</router-link>
            </li>
            <li>
                <router-link class="lia" to="/shop/person/message">消息通知</router-link>
            </li>
            <li>
                <router-link class="lia" to="/shop/person/address">收货地址</router-link>
            </li>
        </ul>
        <h2>安全中心</h2>
        <ul>
            <li>
                <router-link class="lia" to="/shop/person/security">基本信息</router-link>
            </li>
            <li>
                <router-link class="lia" to="/shop/person/other">绑定第三方</router-link>
            </li>
            <li>
                <router-link class="lia" to="/shop/person/authentication">实名认证</router-link>
            </li>
        </ul>
        <h2>售后与服务</h2>
        <ul>
            <li>
                <router-link class="lia" to="/shop/person/aftersale">售后说明</router-link>
            </li>
            <li>
                <router-link class="lia" to="/shop/person/server">服务说明</router-link>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "PersonNav"
    }
</script>

<style scoped lang="stylus">
    .personNav
        background: #fff;
        padding: 20px;
        width: 234px;
        border-radius: 6px;

        h2
            padding: 10px 0;
            font-size: 16px;
            color: #333;
            font-weight: 500

        ul
            padding: 0 16px;

            li
                .lia
                    margin: 10px 0;
                    color: #757575;
                    display: inline-block;
                    font-size: 14px;

</style>
