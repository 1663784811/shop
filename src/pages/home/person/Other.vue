<template>
    <div class="updatePassword">
        <Tabs>
            <TabPane label="微信" icon="ios-chatbubbles">
                <p class="iconP">
                    <Icon type="ios-alert"/>
                </p>
                <h2 class="title">
                    功能正在努力开发中。。。敬请期待！
                </h2>
            </TabPane>
            <TabPane label="QQ" icon="logo-tux">
                <p class="iconP">
                    <Icon type="ios-alert"/>
                </p>
                <h2 class="title">
                    功能正在努力开发中。。。敬请期待！
                </h2>

            </TabPane>
            <TabPane label="微博" icon="ios-eye">
                <p class="iconP">
                    <Icon type="ios-alert"/>
                </p>
                <h2 class="title">
                    功能正在努力开发中。。。敬请期待！
                </h2>
            </TabPane>
        </Tabs>

    </div>
</template>

<script>
    export default {
        name: "Other"
    }
</script>

<style scoped lang="stylus">
    .title
        text-align: center;
        padding: 20px;
        font-size: 20px;
        margin-bottom: 250px;

    .iconP
        margin-top: 150px;
        text-align: center;
        font-size: 60px;
        color: #ff9900;

</style>
