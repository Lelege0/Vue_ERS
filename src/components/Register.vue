<template>
    <div class="register_form">
        <div class="form_item">
            <el-form :model="register_form" :rules="registerRules" ref="registerFormRef" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="register_form.username" prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="register_form.password" prefix-icon="iconfont icon-3702mima" type="password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="character" placeholder="请选择注册身份" style="width: 307px" :status-icon="true" clearable>
                        <el-option label="管理员" value="manage"></el-option>
                        <el-option label="上级领导" value="leader"></el-option>
                        <el-option label="普通用户" value="Nuser"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="register_form.email" prefix-icon="iconfont icon-icon-test1"></el-input>
                </el-form-item>
                <el-form-item prop="yanzheng">
                    <el-input v-model="register_form.yanzheng" prefix-icon="iconfont icon-icon-test" style="width: 165px"></el-input>
                    <el-button style="float: right; width: 135px;text-align: center">点击获取验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 307px" @click="register">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            var checkEmail = (rule, value, cb) =>{
                const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
                if(regEmail.test(value)){
                    return cb()
                }
                cb(new Error('请输入合法的邮箱'))
            }
            var checkpd = (rule, value, cb) =>{
                const pd = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{6,18}$/
                if(pd.test(value)){
                    return cb()
                }
                cb(new Error('请输入6-18位并且既包含数字也包含英文'))
            }
            return{
                register_form:{
                    password: '',
                    username: '',
                    email: '',
                    yanzheng: ''
                },
                select: '',
                character: '',
                registerRules:{
                    username:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { validator: checkpd, trigger: 'blur' }
                    ],
                    email:[
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { validator: checkEmail, trigger: 'blur' }
                    ],
                    yanzheng:[
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { min: 4, max: 4, message: '长度为4个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            register(){
                this.$refs.registerFormRef.validate(async valid =>{
                    if(!valid) return
                    this.$message.success('注册成功，请登录')
                    this.$router.push('./login')
                })
            }
        }
    }
</script>

<style lang="less">
    .register_form{
        background-color: #00ae9d;
        height: 100%;
    }
    .form_item{
        height: 50%;
        width: 20%;
        margin: auto;
        padding-top: 13%;
    }
</style>
