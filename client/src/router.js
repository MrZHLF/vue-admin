import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register'
import Login from "./views/Login";
import Nofind from './views/404'
import Home from './views/Home'
import InfoShow from "./views/InfoShow";
import FundList from "./views/FundList";
import Staff from "./views/Staff";
import ListUser from "./views/ListUser";
import MapList from "./views/MapList";
import ChinaTabsList from "./views/Investment/ChinaTabsList";
import ChinaTouziList from "./views/Investment/ChinaTouziList";
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
        { path: "/staff", name: "staff", component: Staff },
        { path: "/listuser", name: "listuser", component: ListUser },
        { path: "/maplist", name: "maplist", component: MapList },
        { path: "/chinaTabsList", name: "ChinaTabsList", component: ChinaTabsList },
        { path: "/chinaTouziList", name: "chinaTouziList", component: ChinaTouziList }
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