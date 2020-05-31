<template>
    <el-container>
        <el-header>
            <div>
                <img src="../assets/logo1.png" alt="">
                <span class="title">疫情上报系统</span>
            </div>
            <span style="color:white;">欢迎你！</span>
            <el-dropdown>
                <el-button type="primary" style="background-color: #2b2f3a;
                border: 0px;height: 60px;width: 80px; align-items: center;padding: 0px;margin: 0px">
                    <img src="../assets/logo1.png" alt="" style="height: 35px; padding-top: 5px">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/dashboard"  style="text-decoration: none">
                        <el-dropdown-item>首页</el-dropdown-item>
                    </router-link>
                    <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </el-header>
        <el-container>
            <el-aside :width="isCollapse ? '64px' : '200px'">
                <div class="toggle-button" @click="toggleCollapse"><div :class="isCollapse ? 'el-icon-s-unfold': 'el-icon-s-fold'"></div></div>
                <!--侧边菜单-->
                <el-menu :unique-opened="true" background-color="#304156" text-color="#fff"
                         :default-active="activePath" :collapse-transition="false"
                         :collapse="isCollapse" :router="true" >
                    <el-menu-item index="/dashboard">
                            <i class="el-icon-s-home"></i>
                            <span slot="title">Dashboard</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-s-management"></i>
                            <span slot="title">系统管理</span>
                        </template>
                        <el-menu-item index="/users">
                            <i class="el-icon-s-custom"></i>
                            <span slot="title">用户管理</span>
                        </el-menu-item>
                        <el-menu-item index="/logs">
                            <i class="el-icon-menu"></i>
                            <span slot="title">日志管理</span>
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-s-tools"></i>
                            <span slot="title">设置</span>
                        </template>
                        <el-menu-item index="/account_setting">
                            <i class="el-icon-s-help"></i>
                            <span slot="title">账号设置</span>
                        </el-menu-item>
                        <el-menu-item index="/content_setting">
                            <i class="el-icon-s-order"></i>
                            <span slot="title">设置内容</span>
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-s-platform"></i>
                            <span slot="title">信息综合</span>
                        </template>
                        <el-menu-item index="/info_sum">
                            <i class="el-icon-menu"></i>
                            <span slot="title">信息汇总</span>
                        </el-menu-item>
                        <el-menu-item index="/info_analyse">
                            <i class="el-icon-s-marketing"></i>
                            <span slot="title">数据分析</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!--右侧内容主题-->
            <el-container>
                <el-main>
                <!--路由占位符-->
                <router-view></router-view>
            </el-main>
                <el-footer style="height: 20px;background-color: #fff;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
                    ©2020 Lelege技术支持 Powered by WeAreHeroes
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'home',
        data(){
            return{
                isCollapse: false,
                index: '',
                activePath: '/dashboard'
            }
        },
        methods:{
            logout(){
                window.sessionStorage.clear()
                this.$router.push('/login')
            },
            // 点击按钮切换菜单的折叠与展开
            toggleCollapse () {
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>

<style lang="less">
    .el-container{
        background-color: #304156;
        height: 100%;
    }
    .el-header{
        width: 100%;
        background-color: #2b2f3a;
        display: flex;
        justify-content: space-between;
        padding-left: 0px;
        /*padding: 0px;*/
        font-size: 30px;
        > div{
            display: flex;
            align-items: center;
            color: white;
        }
    }
    .el-aside{
        background-color: #304156;
        height: 100%;
        .el-menu {
            border-right: none;
        }
    }
    .title{
        margin-left: 10px;
    }
    .el-main{
        background-color: #fffffb;
    }
    .toggle-button{
        background-color: #4A5064;
        text-align: center;
        cursor: pointer;
        align-items: center;
    }
    .el-icon-s-fold{
        height: 100%;
        width: 40px;
        text-align: center;
    }
    .el-icon-s-unfold{
        height: 100%;
        width: 40px;
        text-align: center;
    }
    .Dashboard{
        width: 0px;
        height: 0px;
    }
</style>
