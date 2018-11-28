<template>
	<div class="sidebar">
		<el-row class="menu_page">
			<el-col>
				<el-menu mode="vertical" class="el-menu-vertical-demo" :collapse="collapse" background-color="#324057" text-color="#fff"
				 active-text-color="#409eff">
					<router-link to='/home'>
						<el-menu-item index="0">
							<i class="el-icon-menu"></i>
							<span slot="title">首页</span>
						</el-menu-item>
					</router-link>
					<router-link to='/staff'>
						<el-menu-item index="1">
							<i class="el-icon-service"></i>
							<span slot="title">用户信息</span>
						</el-menu-item>
					</router-link>
					<router-link to='/listuser'>
						<el-menu-item index="2">
							<i class="el-icon-mobile-phone"></i>
							<span slot="title">信息列表</span>
						</el-menu-item>
					</router-link>
					<template v-for="item in items">
						<el-submenu v-if="item.children" :index="item.path" :key="item.path">
							<template slot="title">
								<i :class="item.icon"></i>
								<span slot="title">{{item.name}}</span>
							</template>
							<router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
								<el-menu-item :index='citem.path'>
									<span slot="title">{{citem.name}}</span>
								</el-menu-item>
							</router-link>
						</el-submenu>
					</template>
					<router-link to='/maplist'>
						<el-menu-item index="3">
							<i class="el-icon-location-outline"></i>
							<span slot="title">地图展示</span>
						</el-menu-item>
					</router-link>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import bus from '../common/bus';
// @ is an alias to /src
export default {
  name: "LeftMenu",
  data() {
    return {
		 collapse: false,
      items: [
        {
          icon: "el-icon-document",
          name: "资金管理",
          path: "fund",
          children: [
            {
              path: "fundList",
              name: "资金流水"
            },
						{
							path: "payList",
							name: "支付单据"
						}
          ]
        },
        {
          icon: "el-icon-setting",
          name: "信息管理",
          path: "info",
          children: [
            {
              path: "infoshow",
              name: "个人信息"
            },
						{
							path: "editor",
							name: "富文本编辑器"
						},
						{
							path: "markdown",
							name: "Markdown编辑器"
						}
          ]
        },
        {
          icon: "el-icon-bell",
          name: "投资管理",
          path: "list",
          children: [
            {
              path: "chinaTouziList",
              name: "省份投资"
						},
						{
              path: "chinaTabsList",
              name: "区域投资"
            }
          ]
				},
				{
          icon: "el-icon-tickets",
          name: "资金数据",
          path: "position",
          children: [
            {
              path: "fundPosition",
              name: "投资分布"
						}
          ]
        }
      ]
    }
  },
	created(){
		// 通过 Event Bus 进行组件间通信，来折叠侧边栏
		bus.$on('collapse', msg => {
			this.collapse = msg;
		})
	}
};
</script>
<style scoped>
.menu_page {
  position: fixed;
  top: 71px;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
}
.sidebar::-webkit-scrollbar{
	width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse){
	width: 250px;
}
.el-menu {
  border: none;
}

.fa-margin {
  margin-right: 5px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  width: 64px;
}

.el-submenu .el-menu-item {
  min-width: 180px;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}

a {
  text-decoration: none;
}
</style>
