<template>
    <div class="messageDetails">
        <h2 class="title">标题</h2>
        <div class="messageInfo">
            <span class="infoLi">时间：2019-10-10 10:10:10</span>
            <span class="infoLi">来源：系统AI</span>
        </div>
        <div class="contentBox">
            ddddddd
            sdsddsdsd
            d
            sdsdsd

        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageDetails"
    }
</script>

<style scoped lang="stylus">
    .messageDetails
        min-height: 500px;

    .title
        text-align: center;
        font-size: 18px;
        margin-bottom: 10px;

    .messageInfo
        text-align: center;
        margin-bottom: 20px;

        .infoLi
            margin: 0 15px;

</style>
