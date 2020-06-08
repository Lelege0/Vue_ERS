<template>
    <div>
        <el-card>
            <el-form label-width="80px">
                <el-form-item label="姓名:">
                    <el-input :disabled="true" placeholder="Tomcat"></el-input>
                </el-form-item>
                <el-form-item label="性别:">
                    <el-input :disabled="true" placeholder="男"></el-input>
                </el-form-item>
                <el-form-item label="年龄:">
                    <el-input :disabled="true" placeholder="18"></el-input>
                </el-form-item>
                <el-form-item label="地址:">
                    <el-input :disabled="flag" :placeholder=" flag ? '北京市四合院': ''"></el-input>
                </el-form-item>
                <el-form-item label="电话:">
                    <el-input :disabled="flag" :placeholder="flag ? '18526543213':''"></el-input>
                </el-form-item>
                <el-form-item label="邮箱:">
                <el-input :disabled="flag" :placeholder="flag ? '9856485@163.com' : ''"></el-input>
                </el-form-item>
                <el-button type="primary" style="width: 150px;margin-left: 380px" @click="chufa">{{flag ? sign : sign1}}</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                flag:true,
                sign: '编辑',
                sign1: '确定'
            }
        },
        methods:{
            chufa(){
                this.flag = false
            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: 450px;
    }
</style>
