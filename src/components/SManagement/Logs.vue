<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/dashboard' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            <el-breadcrumb-item>日志管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row :gutter="10">
                <el-col :span="3">
                    <el-input placeholder="请输入内容" clearable>
                    </el-input>
                </el-col>
                <el-col :span="7.5">
                    <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator=":"
                                    start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
                    </el-date-picker>
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
            <!--列表-->
            <el-table :data="tableData" style="width: 100%; margin-top: 15px" stripe>
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-table stripe>
                            <el-table-column label="SQL" prop="name"></el-table-column>
                            <el-table-column label="请求方法" prop="sex"></el-table-column>
                            <el-table-column label="请求参数" prop="age"></el-table-column>
                            <el-table-column label="执行结果" prop="age"></el-table-column>
                        </el-table>
                    </template>
                </el-table-column>
                <el-table-column
                        label="用户名"
                        prop="username">
                </el-table-column>
                <el-table-column
                        label="IP"
                        prop="ip">
                </el-table-column>
                <el-table-column
                        label="IP来源"
                        prop="resource">
                </el-table-column>
                <el-table-column
                        label="请求描述"
                        prop="desc">
                </el-table-column>
                <el-table-column
                        label="请求时间"
                        prop="time">
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: '',
                value2: '',
                tableData: [{
                    username: 'admin',
                    ip: '167.56.85.62',
                    resource: '中国甘肃',
                    desc: '请求登录',
                    time: '\t\n' +
                        '2020-05-03 00:00:51'
                }, {
                    username: 'admin',
                    ip: '185.52.32.42',
                    resource: '中国新疆',
                    desc: '获取用户列表',
                    time: '\t\n' +
                        '2020-05-03 00:02:39'
                }, {
                    username: 'admin',
                    ip: '192.62.35.56',
                    resource: '中国西安',
                    desc: '获取日志信息',
                    time: '\t\n' +
                        '2020-05-03 16:25:27'
                }, {
                    username: 'admin',
                    ip: '132.56.21.58',
                    resource: '中国湖南',
                    desc: '请求登陆',
                    time: '\t\n' +
                        '2020-05-03 16:26:47'
                }]
            }
        }
    }
</script>

<style scoped>

</style>
