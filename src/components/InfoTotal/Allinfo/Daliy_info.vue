<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/info_sum' }">信息汇总</el-breadcrumb-item>
            <el-breadcrumb-item>日常打卡</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card style="height: 570px">
            <el-table :data="tableData" style="width: 100%" max-height="560">
                <el-table-column type="index" width="70">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="120">
                </el-table-column>
                <el-table-column prop="health_flag" label="健康状况" width="120">
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
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData: [{
                    name: '王小虎',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 36.1,
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '16539586421'
                }, {
                    name: '王小虎',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 35.9,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '18569541234'
                }, {
                    name: '王小虎',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 36.3,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '15698745412'
                }, {
                    name: '王小虎',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 35.8,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '18765239854'
                }, {
                    name: '王小虎',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 36.0,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '15794568745'
                }, {
                    name: '王小虎',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 35.7,
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '15623459874'
                }, {
                    name: '王小虎',
                    sex: '男',
                    health_flag: '正常',
                    temperature: 35.9,
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
            }
        }
    }
</script>

<style>

</style>
