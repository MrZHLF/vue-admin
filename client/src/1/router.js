import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/register/Register'
import Login from "./views/logo/Login";
import Nofind from './views/404'
import Home from './views/Home'
import InfoShow from "./views/information/InfoShow";
import Editor from "./views/information/Editor";
import Markdown from "./views/information/Markdown";
import ShowFundArticle from "./views/information/article/ShowFundArticle";
import FundList from "./views/fundmanagement/FundList";
import PayList from "./views/fundmanagement/PayList";
import Staff from "./views/Staff";
import ListUser from "./views/ListUser";
import MapList from "./views/MapList";
import ChinaTabsList from "./views/Investment/ChinaTabsList";
import ChinaTouziList from "./views/Investment/ChinaTouziList";
import FundPosition from "./views/capitalData/FundPosition";
import Lock from './views/Lock.vue'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "index"
    },
    {
      path: "/index",
      name: "Index",
      component: Index,
			meta: { title: '首页' },
      children: [
        { path: "", component: Home,meta: { title: '首页' }},
        { path: "/home", name: "home", component: Home,meta: { title: '首页' } },
				{ path: "/staff", name: "staff", component: Staff,meta: { title: '用户信息' } },
				{ path: "/listuser", name: "listuser", component: ListUser,meta: { title: '信息列表' } },
				{ path: "/fundList", name: "fundList", component: FundList,meta: { title: '资金流水' } },
				{ path: "/payList", name: "payList", component: PayList,meta: { title: '支付单据' } },
        { path: "/Infoshow", name: "Infoshow", component: InfoShow,meta: { title: '个人信息' } },
				{ path: "/editor", name: "editor", component: Editor,meta: { title: '富文本编辑器' } },
        { path: "/markdown", name: "markdown", component: Markdown,meta: { title: 'Markdown编辑器' } },
				{ path: "/showFundArticle", name: "showFundArticle", component: ShowFundArticle,meta: { title: '文章列表' } },
				{ path: "/chinaTouziList", name: "chinaTouziList", component: ChinaTouziList,meta: { title: '省份投资' } },
        { path: "/chinaTabsList", name: "ChinaTabsList", component: ChinaTabsList,meta: { title: '区域投资' } },
        { path: "/fundPosition", name: "fundPosition", component: FundPosition,meta: { title: '投资分布' } },
        { path: "/maplist", name: "maplist", component: MapList,meta: { title: '地图展示' } }
      ]
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
		{
			path: "/lock",
			name: "lock",
			component: Lock
		},
    {
      path: "*",
      name: "Nofind",
      component: Nofind
    }
  ],
  // mode: "history"
});

// 路由守卫
router.beforeEach((to, from, next) => {
  
  const isLogin = localStorage.eleToken ? true : false

  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
  
});

export default router