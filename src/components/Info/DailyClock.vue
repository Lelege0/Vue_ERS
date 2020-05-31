<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/content_setting' }">设置内容</el-breadcrumb-item>
            <el-breadcrumb-item>日常打卡</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <div style="width: 500px; text-align: center;margin-bottom: 10px;font-size: 25px">日常打卡</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
                <el-form-item label="姓名" required="true" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
<!--                    <el-input></el-input>-->
                    <el-select v-model="value">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="健康状况" required="true" prop="healthCon">
                    <el-input v-model="ruleForm.healthCon"></el-input>
                </el-form-item>
                <el-form-item label="体温" required="true" prop="temperature">
                    <el-input type="number" v-model="ruleForm.temperature"></el-input>
                </el-form-item>
                <el-form-item label="地址" required="true" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="ruleForm.phone">
                    </el-input>
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
            var checkPhone = (rule,value,cb)=>{
                const regMobile = /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
                if (regMobile.test(value)){
                    return cb()
                }
                return cb(new Error('请输入11位的电话'))
            }
            return{
                ruleForm:{
                    name: '',
                    sex: '',
                    healthCon: '',
                    temperature: '',
                    address: '',
                    phone: ''
                },
                rules:{
                    name:[
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 3, message: '长度在 2 到 3 个字符', trigger: 'blur' }
                    ],
                    healthCon:[
                        { required: true, message: '请输入健康状况', trigger: 'blur' },
                        { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                    ],
                    temperature:[
                        { required: true, message: '请输入温度', trigger: 'blur' },
                        { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                    ],
                    address:[
                        { required: true, message: '请输入地址', trigger: 'blur' },
                        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                    ],
                    phone:[
                        { message: '请输入联系电话', trigger: 'blur' },
                        { validator: checkPhone, trigger: 'blur' }
                    ],
                },
                options:[{
                        value: '1',
                        label: '男'
                    }, {
                        value: '2',
                        label: '女'
                    }],
                value: ''
                }
            },
            methods:{
            }
    }
</script>

<style scoped>
    .el-input{
        width: 450px;
    }
</style>
