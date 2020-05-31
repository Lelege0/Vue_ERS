<template>
    <div>
        <el-card>
            <el-form label-width="90px">
                <el-form-item label="原密码:">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="新密码:">
                    <el-input></el-input>
                    *密码由8-16位字符（字母、数字、_@#.特殊字符）组成!
                </el-form-item>
                <el-form-item label="确认新密码:">
                    <el-input></el-input>
                </el-form-item>
                <el-button type="primary" style="width: 150px;margin-left: 290px">保存</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .el-input{
        width: 350px;
    }
</style>
