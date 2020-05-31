<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/content_setting' }">设置内容</el-breadcrumb-item>
            <el-breadcrumb-item>社区外来人员登记</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <div style="width: 500px; text-align: center;margin-bottom: 10px;font-size: 25px">社区外来人员登记</div>
            <el-form ref="ruleForm" label-width="95px">
                <el-form-item label="姓名" required>
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="性别">
                     <!--<el-input></el-input>-->
                    <el-select v-model="value">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="体温" required>
                    <el-input type="number"></el-input>
                </el-form-item>
                <el-form-item label="来源" required>
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="到访门牌号" required>
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input></el-input>
                </el-form-item>
                <el-button type="primary" size="default" style="margin-left: 380px; width: 150px">发布</el-button>
            </el-form>
            <div style="font-size: 14px; color: red">注：*为必填项</div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                options:[{
                    value: '1',
                    label: '男'
                }, {
                    value: '2',
                    label: '女'
                }],
                value: ''
            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: 450px;
    }
</style>
