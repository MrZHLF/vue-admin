import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
 import moment from 'moment'
 import echarts from 'echarts'
import VueQuillEditor from 'vue-quill-editor'
Vue.prototype.$echarts = echarts 


Vue.use(VueQuillEditor)

 import VueAMap from 'vue-amap';
 
 
 Vue.use(VueAMap);
Vue.config.productionTip = false

//百度地图	
VueAMap.initAMapApiLoader({
  key: '	3f5bdc7cb6cfffbafe7fbbb18528d7bb',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

Vue.prototype.$axios = axios

//全局时间格式化过滤
Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    return moment(value).format('YYYY-MM-DD');
});


Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
