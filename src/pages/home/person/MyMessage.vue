<template>
    <div class="myMessage">
        <Tabs>
            <TabPane label="全部" icon="md-square">

                <template v-if="!product">
                    <ul>
                        <li class="textOne messageLi">
                            <router-link to="/shop/person/message/details">
                                <div class="messageBox">
                                    <span class="textNum">1</span>
                                    <span class="text">dddddd</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="textOne messageLi">
                            <router-link to="/shop/person/message/details">
                                <div class="messageBox">
                                    <span class="textNum">1</span>
                                    <span class="text">dddddd</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="textOne messageLi">
                            <router-link to="/shop/person/message/details">
                                <div class="messageBox">
                                    <span class="textNum">1</span>
                                    <span class="text">dddddd</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                    <div class="pageBox">
                        <Page :total="100"/>
                    </div>
                </template>
                <div v-else>
                    <p class="iconP">
                        <Icon type="ios-alert"/>
                    </p>
                    <h2 class="title">
                        功能正在努力开发中。。。敬请期待！
                    </h2>

                </div>


            </TabPane>
            <TabPane label="未读" icon="ios-notifications-outline">

                <template v-if="!product">

                    <ul>
                        <li class="textOne messageLi">
                            <router-link to="/shop/person/message/details">
                                <div class="messageBox">
                                    <span class="textNum">1</span>
                                    <span class="text">dddddd</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="textOne messageLi">
                            <router-link to="/shop/person/message/details">
                                <div class="messageBox">
                                    <span class="textNum">1</span>
                                    <span class="text">dddddd</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="textOne messageLi">
                            <router-link to="/shop/person/message/details">
                                <div class="messageBox">
                                    <span class="textNum">1</span>
                                    <span class="text">dddddd</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                    <div class="pageBox">
                        <Page :total="100"/>
                    </div>
                </template>
                <div v-else>
                    <p class="iconP">
                        <Icon type="ios-alert"/>
                    </p>
                    <h2 class="title">
                        功能正在努力开发中。。。敬请期待！
                    </h2>

                </div>
            </TabPane>
            <TabPane label="已读" icon="md-notifications">
                <template v-if="!product">
                    <ul>
                        <li class="textOne messageLi">
                            <router-link to="/shop/person/message/details">
                                <div class="messageBox">
                                    <span class="textNum">1</span>
                                    <span class="text">dddddd</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="textOne messageLi">
                            <router-link to="/shop/person/message/details">
                                <div class="messageBox">
                                    <span class="textNum">1</span>
                                    <span class="text">dddddd</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="textOne messageLi">
                            <router-link to="/shop/person/message/details">
                                <div class="messageBox">
                                    <span class="textNum">1</span>
                                    <span class="text">dddddd</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                    <div class="pageBox">
                        <Page :total="100"/>
                    </div>
                </template>
                <div v-else>
                    <p class="iconP">
                        <Icon type="ios-alert"/>
                    </p>
                    <h2 class="title">
                        功能正在努力开发中。。。敬请期待！
                    </h2>

                </div>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        name: "MyMessage",
        data() {
            return {
                product: true
            }
        }
    }
</script>

<style scoped lang="stylus">

    .messageLi
        border-bottom: 1px solid #eee;

        .messageBox
            padding: 10px 14px;

            &:hover
                background: #f5f5f5;

        .text
            color: #757575;

        .textNum
            margin-right: 10px;
            font-weight: bold;
            color: #757575;

    .pageBox
        margin-top: 20px;
        text-align: center;

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
