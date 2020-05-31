<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/dashboard' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>设置</el-breadcrumb-item>
            <el-breadcrumb-item>账户设置</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container>
            <el-header>
                <el-menu :default-active="activeIndex" @select="handleSelect" :router="true" mode="horizontal" active-text-color="#409EFF">
                    <el-menu-item index="/basic_info">
                        <span slot="title">基本资料</span>
                    </el-menu-item>
                    <el-menu-item index="/password_manage">
                        <span slot="title">密码管理</span>
                    </el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '/basic_info'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-card {
        height: 300px;
    }

    .el-aside {
        height: auto;
    }
    .el-main{
        padding: 0px;
    }
    .el-header{
        width: 100%;
        background-color: #ffffff;
        padding: 0px;
    }
    .el-breadcrumb {
        margin-bottom: 10px;
    }
</style>
