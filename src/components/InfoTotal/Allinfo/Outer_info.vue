<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/info_sum' }">信息汇总</el-breadcrumb-item>
            <el-breadcrumb-item>社区外来人员</el-breadcrumb-item>
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
                <el-table-column prop="temperature" label="体温" width="130">
                </el-table-column>
                <el-table-column prop="source" label="来源地" width="120">
                </el-table-column>
                <el-table-column prop="to_door" label="到访门牌号" width="120">
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
                    temperature: 36.1,
                    source: '甘肃白塔寺',
                    to_door: '1单元201',
                    phone: '16539586421'
                }, {
                    name: '小明',
                    sex: '男',
                    temperature: 35.9,
                    source: '河南洛阳',
                    to_door: '3单元402',
                    phone: '16539586421'
                }, {
                    name: '小花',
                    sex: '男',
                    temperature: 36.3,
                    source: '湖北武汉',
                    to_door: '6单元502',
                    phone: '16539586421'
                }, {
                    name: 'Tomcat',
                    sex: '男',
                    temperature: 36.1,
                    source: '四川宜宾',
                    to_door: '4单元302',
                    phone: '16539586421'
                }, {
                    name: 'mysql',
                    sex: '男',
                    temperature: 36.0,
                    source: '新疆吐鲁番',
                    to_door: '3单元202',
                    phone: '16539586421'
                }, {
                    name: 'linux',
                    sex: '男',
                    temperature: 35.9,
                    source: '新疆哈密',
                    to_door: '1单元101',
                    phone: '16539586421'
                }, {
                    name: 'apache',
                    sex: '男',
                    temperature: 35.9,
                    source: '内蒙古',
                    to_door: '5单元502',
                    phone: '16539586421'
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
