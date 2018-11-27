import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/register/Register'
import Login from "./views/logo/Login";
import Nofind from './views/404'
import Home from './views/Home'
import InfoShow from "./views/InfoShow";
import FundList from "./views/fundmanagement/FundList";
import PayList from "./views/fundmanagement/PayList";
import Staff from "./views/Staff";
import ListUser from "./views/ListUser";
import MapList from "./views/MapList";
import ChinaTabsList from "./views/Investment/ChinaTabsList";
import ChinaTouziList from "./views/Investment/ChinaTouziList";
import FundPosition from "./views/capitalData/FundPosition";

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
      children: [
        { path: "", component: Home },
        { path: "/home", name: "home", component: Home },
        { path: "/Infoshow", name: "Infoshow", component: InfoShow },
        { path: "/foundlist", name: "fundlist", component: FundList },
				{ path: "/payList", name: "payList", component: PayList },
        { path: "/staff", name: "staff", component: Staff },
        { path: "/listuser", name: "listuser", component: ListUser },
        { path: "/maplist", name: "maplist", component: MapList },
        { path: "/chinaTabsList", name: "ChinaTabsList", component: ChinaTabsList },
        { path: "/chinaTouziList", name: "chinaTouziList", component: ChinaTouziList },
        { path: "/fundPosition", name: "fundPosition", component: FundPosition },
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
      path: "*",
      name: "Nofind",
      component: Nofind
    }
  ],
  mode: "history"
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