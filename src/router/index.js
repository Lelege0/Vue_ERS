import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import User from "../components/SManagement/User";
import Logs from "../components/SManagement/Logs";
import Dashboard from "../components/Dashboard/Dashboard";
import AccountSetting from "../components/Setting/AccountSetting";
import ContentSetting from "../components/Setting/ContentSetting";
import InfoSummary from "../components/InfoTotal/InfoSummary";
import InfoAnalyse from "../components/InfoTotal/InfoAnalyse";
import DailyClock from "../components/Info/DailyClock";
import HealthInfo from "../components/Info/HealthInfo";
import OuterPeople from "../components/Info/OuterPeople";
import BInfo from "../components/Setting/BasicInfo/BInfo";
import PwdManage from "../components/Setting/BasicInfo/PwdManage";
import Daliy_info from "../components/InfoTotal/Allinfo/Daliy_info";
import Health_info from "../components/InfoTotal/Allinfo/Health_info";
import Outer_info from "../components/InfoTotal/Allinfo/Outer_info";

Vue.use(VueRouter)


const vueRouter = new VueRouter({
  routes:[
    { path: '/',redirect: '/login' },
    {path: '/login',component: Login},
    {path: '/register',component: Register},
    {
      path: '/home',
      component: Home,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          component:Dashboard
        },
        {
          path: '/users',
          component: User
        },
        {
          path: '/logs',
          component: Logs
        },
        {
          path: '/account_setting',
          component: AccountSetting,
          redirect: '/basic_info',
          children:[
            {
              path: '/basic_info',
              component: BInfo
            },
            {
              path: '/password_manage',
              component: PwdManage
            }
          ]
        },
        {
          path: '/content_setting',
          component: ContentSetting,
        },
        {
          path: '/info_sum',
          component: InfoSummary
        },
        {
          path: '/info_analyse',
          component: InfoAnalyse
        },
        {
          path: '/daily_clock',
          component: DailyClock
        },
        {
          path: '/health_info',
          component: HealthInfo
        },
        {
          path: '/outer_people',
          component: OuterPeople
        },
        {
          path: '/daily_info_sum',
          component: Daliy_info
        },
        {
          path: '/health_info_sum',
          component: Health_info
        },
        {
          path: '/outer_info_sum',
          component: Outer_info
        }
      ]
    }
  ]
})

export default vueRouter
