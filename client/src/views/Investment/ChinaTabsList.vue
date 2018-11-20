<template>
	<div class="touzilist">
		<div>
			<el-tabs type="border-card" @tab-click="handleClick">
				<el-tab-pane v-for="(item,index) in listTitle" :key="index">
					<span slot="label"><i :class="item.icon" style="padding-right: 5px;"></i>{{item.name}}</span>
					<china-tabs-table :getUserInfo="getUserInfo"/>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
import ChinaTabsTable from "./tablist/ChinaTabsTable";
export default {
  data() {
    return {
      toggleData: {},
			getUserInfo:[],
      listTitle: [
        { icon: "el-icon-view", name: "华东区域" },
        { icon: "el-icon-view", name: "华南区域" },
        { icon: "el-icon-view", name: "华中区域" },
        { icon: "el-icon-view", name: "西北区域" },
        { icon: "el-icon-view", name: "西南地区" },
        { icon: "el-icon-view", name: "东北地区" },
        { icon: "el-icon-view", name: "台港澳地区" }
      ]
    };
  },
  methods: {
    getChinaTabsTable() {
      this.$axios.get('https://www.easy-mock.com/mock/5bee2bf96b3691268016a10f/chinaTabsList').then(res => {
      	this.toggleData = res.data.data;
				this.getUserInfo = this.toggleData.centralChina  //默认第一个显示
				console.log(this.getUserInfo)
      })
    },
    handleClick(tab) {
    	if (tab.index == 0) {
				this.getUserInfo = this.toggleData.eastChina  //华东地区
    	} else if (tab.index == 1) {
				this.getUserInfo = this.toggleData.southChina  //华南地区
			}else if (tab.index == 2) {
				this.getUserInfo = this.toggleData.centralChina //华中地区
			}else if (tab.index == 3) {
				this.getUserInfo = this.toggleData.northChina  //西北地区
			}else if (tab.index == 4) {
				this.getUserInfo = this.toggleData.northwestChina  //西南地区
			}else if (tab.index == 5) {
				this.getUserInfo = this.toggleData.southwestChina //东北地区
			}else if (tab.index == 6) {
				this.getUserInfo = this.toggleData.specialareaChina //台港澳地区
			}
			
    }
  },
  mounted() {
    this.getChinaTabsTable();
  },
  components: {
    "china-tabs-table": ChinaTabsTable
  }
};
</script>

<style scoped>
.touzilist {
  margin: 20px;
}
</style>
