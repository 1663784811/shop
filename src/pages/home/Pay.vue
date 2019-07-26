<template>
    <div class="minwidth">
        <ShopHeader></ShopHeader>
        <div class="pay">
            <div class="container" v-show="type===0">
                <div class="payErCode">
                    <div class="ErCodeBox">
                        <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562402478&di=7fc4c1d0befc36f15b127fd719e3f19e&src=http://b-ssl.duitang.com/uploads/item/201601/22/20160122003337_ZxyWu.jpeg">
                    </div>
                    <p class="messageText">扫一扫 支付</p>
                </div>


                <div class="messageBox" v-show="type===1">
                    <p class="messageIcon">
                        <Icon type="md-checkmark-circle"/>
                    </p>
                    <p class="messageText">支付成功！</p>
                    <p class="messageBtnP"><span class="linkBtn">查看订单</span> <span class="linkBtn">返回首页</span></p>
                </div>

                <div class="messageBox" v-show="type===2">
                    <p class="messageIcon err">
                        <Icon type="ios-alert"/>
                    </p>
                    <p class="messageText">支付失败，请重试！</p>
                </div>


            </div>
        </div>
        <ShopFooter></ShopFooter>
    </div>
</template>

<script>
    import ShopHeader from "./components/ShopHeader";
    import ShopFooter from "./components/ShopFooter";


    export default {
        name: "Pay",
        components: {
            ShopHeader,
            ShopFooter
        },
        data() {
            return {
                type: 0
            }
        }
    }
</script>

<style scoped lang="stylus">
    .pay
        min-height: 500px;

        .payErCode
            .ErCodeBox
                width: 250px;
                margin: 80px auto 40px auto;
                border: 1px solid #eee;
                padding: 20px;

                img
                    width: 100%;

            .messageText
                text-align: center;


        .messageBox
            text-align: center;

            .messageIcon
                font-size: 80px;
                margin-top: 60px;
                color: #19be6b

            .err
                color: #ed4014;

            .messageText
                margin-top: 20px;
                font-size: 20px;

            .messageBtnP
                margin: 40px 0;

            .linkBtn
                display: inline-block;
                font-size: 16px;
                margin: 0 20px;
                cursor: pointer;

</style>
