<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/dashboard' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>设置</el-breadcrumb-item>
            <el-breadcrumb-item>上报信息</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card style="height: 555px">
            <el-card class="card_se" shadow="hover" @click.native="dailyClock">
                <div class="div1">
                    日常打卡<br><br><br><br><br>
                    人员体温、地址、健康状况
                </div>
                <div class="div2">
                    <img src="../../assets/daliy.png" alt="">
                </div>
            </el-card>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            dailyClock(){
                this.$router.push('./daily_on')
            }
        }
    }
</script>

<style scoped>
    .card_se{
        width: 350px;
        height: 200px;
        float: left;
        margin-right: 10px;
        background: linear-gradient(to right, #90d7ec,#409EFF);
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .div1{
        z-index: 1;
        width: 200px;
        float: left;
    }
    .div2{
        z-index: 2;
        width: 110px;
        height: 105px;
        float: left;
        margin-top: 20px;
    }
    img{
        float: right;
        width: 110px;
        height: 105px;
    }
</style>
