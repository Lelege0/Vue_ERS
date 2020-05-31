<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/dashboard' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row :gutter="20">
                <el-col :span="9">
                    <el-input placeholder="请输入内容" clearable>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
                </el-col>
            </el-row>
            <el-table border stripe :data="tableData">
                <el-table-column type="index"></el-table-column>
                <el-table-column label="用户名" prop="name" width="100px"></el-table-column>
                <el-table-column label="性别" prop="sex" width="70px"></el-table-column>
                <el-table-column label="家庭地址" prop="address" width="250px"></el-table-column>
                <el-table-column label="联系电话" prop="phone" width="150px"></el-table-column>
                <el-table-column label="角色" prop="character" width="100px"></el-table-column>
                <el-table-column label="邮箱" prop="email" width="200px"></el-table-column>
                <el-table-column label="状态" width="100px">
                    <template slot-scope="scope">
                        <el-switch v-model="value" @change="userStateChange"  active-color="#13ce66" inactive-color="#ff4949"
                                   active-value="100" inactive-value="0"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <!--编辑-->
                        <el-button type="primary" icon="el-icon-edit" size="small" @click="editDialogVisible = true"></el-button>
                        <!--删除-->
                        <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteUser"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!--分页-->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5, 10]" :page-size="queryInfo.pagesize"
                    layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
        </el-card>
        <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%"  @close="addDialogClosed">
            <el-form :model="tableData" label-width="80px" ref="addFormRef" :rules="userAddFormRules">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="tableData.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-input v-model="tableData.sex"></el-input>
                </el-form-item>
                <el-form-item label="家庭住址" prop="address">
                    <el-input v-model="tableData.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="tableData.phone"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="character">
                    <el-input v-model="tableData.character"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="tableData.email"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!--修改-->
        <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%"  @close="editDialogClosed">
            <el-form :model="editUserForm" label-width="80px" ref="editFormRef" :rules="userAddFormRules">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="editUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-input v-model="editUserForm.sex"></el-input>
                </el-form-item>
                <el-form-item label="家庭住址" prop="address">
                    <el-input v-model="editUserForm.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="editUserForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="character">
                    <el-input v-model="editUserForm.character"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="editUserForm.email"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value:'100',
                tableData: [{
                    id: 1,
                    name: 'admin',
                    sex: '男',
                    address: '甘肃省武威市凉州区河东镇',
                    phone: '18795423658',
                    character: '管理员',
                    email: '1948780127@qq.com'
                },
                    {
                        id: 2,
                        name: 'lisi',
                        sex: '女',
                        address: '贵州省武威市凉州区河东镇',
                        phone: '13598456523',
                        character: '普通用户',
                        email: '66589452@qq.com'
                    },
                    {
                        id: 3,
                        name: 'leader',
                        sex: '男',
                        address: '云南省武威市凉州区河东镇',
                        phone: '18695326895',
                        character: '上级部门',
                        email: '996532584951@qq.com'
                    },
                    {
                        id: 4,
                        name: 'manager',
                        sex: '男',
                        address: '河南省武威市凉州区河东镇',
                        phone: '13865956425',
                        character: '管理员',
                        email: '55684955@163.com'
                    }],
                queryInfo: {
                    query: '',
                    // 当前的页数
                    pagenum: 1,
                    // 当前每页显示多少条数据
                    pagesize: 10
                },
                addDialogVisible: false,
                editDialogVisible: false,
                userAddFormRules:{
                    name: [
                        { required: true, message: '请输入登陆名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请输入性别', trigger: 'blur' },
                        { min: 1, max: 1, message: '请输入男/女', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入家庭住址', trigger: 'blur' },
                        { min: 5, max: 30, message: '请输入5 到 30个字符', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入联系电话', trigger: 'blur' },
                        { min: 11, max: 11, message: '请输入11位联系电话', trigger: 'blur' }
                    ],
                    character: [
                        { required: true, message: '请输入角色', trigger: 'blur' },
                        { min: 2, max: 5, message: '请输入2 到 5个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { message: '请输入正确的邮箱号', trigger: 'blur' }
                    ]
                },
                editUserForm:{
                    id: 0,
                    name: '',
                    sex: '',
                    address: '',
                    phone: '',
                    character: '',
                    email: ''
                }
            }
        },
        methods: {
            async deleteUser(id) {
                const confirmResult = await this.$confirm(
                    '此操作将永久删除该用户数据, 是否继续?',
                    '提示',
                    {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).catch(err => {
                    return err
                })
                console.log(confirmResult)
                if (confirmResult !== 'confirm') {
                    return this.$message.info('已经取消删除')
                }else{
                    this.tableData.splice(this.tableData.id, 1)
                    this.$message.success('已成功删除！')
                }
            },
            handleCurrentChange (newPage) {
                // 监听页码值改变的事件
                console.log(newPage)
                this.queryInfo.pagenum = newPage
            },
            handleSizeChange (newSize) {
                console.log(newSize)
                this.queryInfo.pagesize = newSize
            },
            userStateChange(){
                this.tableData.value = !this.tableData.value
            },
            addDialogClosed () {
                this.$refs.addFormRef.resetFields()
            },
            editUserInfo(){
                this.editUserForm = this.tableData[this.tableData.id]
                this.editDialogVisible = true
                console.log(editDialogVisible)
            },
            editDialogClosed(){
                this.$refs.editFormRef.resetFields()
            }
        }
    }
</script>

<style  scoped>
    .el-table {
        margin-top: 15px;
    }
    .el-pagination{
        margin-top: 15px;
    }
</style>
