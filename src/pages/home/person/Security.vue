<template>
    <div class="updatePassword">
        <Tabs>
            <TabPane label="修改密码" icon="md-key">
                <div class="box">
                    <div class="row">
                        <Input placeholder="原密码"/>
                    </div>
                    <div class="row">
                        <Input placeholder="新密码"/>
                    </div>
                    <div class="row">
                        <Input placeholder="确认密码"/>
                    </div>
                    <div class="row">
                        <Button type="success" long>修改密码</Button>
                    </div>
                </div>
            </TabPane>
            <TabPane label="修改手机号" icon="ios-phone-portrait">
                <div class="box">
                    <div class="row">
                        <p>手机号:18819617231</p>
                    </div>
                    <div class="row">
                        <Input placeholder="新手机号"/>
                    </div>
                    <div class="row">
                        <Input placeholder="验证码"/>
                    </div>
                    <div class="row">
                        <Button type="success" long>修改密码</Button>
                    </div>
                </div>
            </TabPane>
            <TabPane label="修改邮箱" icon="md-at">
                <div class="box">
                    <div class="row">
                        <p>原邮箱:1663784811@qq.com</p>
                    </div>
                    <div class="row">
                        <Input placeholder="新邮箱"/>
                    </div>
                    <div class="row">
                        <Input placeholder="验证码"/>
                    </div>
                    <div class="row">
                        <Button type="success" long>修改密码</Button>
                    </div>
                </div>
            </TabPane>
        </Tabs>

    </div>
</template>

<script>
    export default {
        name: "Security"
    }
</script>

<style scoped lang="stylus">
    .box
        width: 400px;
        margin: 50px auto;

        .row
            padding: 10px 0;

</style>
