<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/dashboard' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>信息综合</el-breadcrumb-item>
            <el-breadcrumb-item>信息汇总</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card style="height: 550px">
            <el-card class="card_se" shadow="hover" @click.native="daliy_info">
                <div class="div1">
                    日常打卡<br><br><br><br><br>
                    人员体温、地址、健康状况
                </div>
                <div class="div2">
                    <img src="../../assets/daliy.png" alt="">
                </div>
            </el-card>
            <el-card class="card_se" shadow="hover" @click.native="health_info">
                <div class="div1">
                    健康信息<br><br><br><br><br>
                    体温、是否发烧、是否健康
                </div>
                <div class="div2">
                    <img src="../../assets/clock.png" alt="">
                </div>
            </el-card>
            <el-card class="card_se" shadow="hover" @click.native="outer_info">
                <div class="div1">
                    社区外来人员登记<br><br><br><br><br>
                    姓名、体温、到访门牌号
                </div>
                <div class="div2">
                    <img src="../../assets/register.png" alt="">
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
            daliy_info(){
                this.$router.push('./daily_info_sum')
            },
            health_info(){
                this.$router.push('./health_info_sum')
            },
            outer_info(){
                this.$router.push('./outer_info_sum')
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
    img{
        float: right;
        width: 110px;
        height: 105px;
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
</style>
