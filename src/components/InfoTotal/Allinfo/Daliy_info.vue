<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/info_sum' }">信息汇总</el-breadcrumb-item>
            <el-breadcrumb-item>日常打卡</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card style="height: 600px">
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-input placeholder="请输入内容" clearable>
                    </el-input>
                </el-col>
                <el-col :span="2.5">
                    <el-button type="primary" icon="el-icon-search">Search</el-button>
                </el-col>
                <el-col :span="2.5">
                    <el-button type="danger" icon="el-icon-delete">Clear</el-button>
                </el-col>
                <el-col :span="2.5">
                    <el-button type="warning" icon="el-icon-download">Export</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%" max-height="560">
                <el-table-column label="#" type="index" width="100">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="130">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="120">
                </el-table-column>
                <el-table-column prop="health_flag" label="健康状况" width="130">
                </el-table-column>
                <el-table-column prop="temperature" label="体温" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="300">
                </el-table-column>
                <el-table-column prop="phone" label="联系电话" width="200">
                </el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger" size="small">
                            移除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="pagenum" :page-sizes="[5, 10, 15, 20]" :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                pagenum: 5,
                pagesize: 10,
                tableData: [{
                    name: '王小虎',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 36.1,
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '16539586421'
                }, {
                    name: '王小六',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 37.2,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '18569541234'
                }, {
                    name: 'sql',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 37.5,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '15698745412'
                }, {
                    name: '小龙',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 35.8,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '18765239854'
                }, {
                    name: '刘龙',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 42,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '15794568745'
                }, {
                    name: '王小虎',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 38.1,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '15623459874'
                }, {
                    name: '王五',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 37.4,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '16598475821'
                }]
            }
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            handleSizeChange(newsize){
                this.pagesize = newsize
            },
            handleCurrentChange(newnum){
                this.pagenum = newnum
            }
        }
    }
</script>

<style scoped>
    .el-table{
        margin-top: 10px;
        margin-bottom: 15px;
    }
</style>
