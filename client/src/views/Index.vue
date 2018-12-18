<template>
  <div class="index">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <div class="rightContainer" :class="{'content-collapse':collapse}">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import bus from '../common/bus'
 // import moment from 'moment'
// @ is an alias to /src
export default {
  name: 'Index',
	data() {
		return {
			collapse: false
		}
	},
  components:{
    Header,
    LeftMenu
  },
	created() {
		//内容区域跟随变化
		 bus.$on('collapse', msg => {
			console.log(msg)
			this.collapse = msg;
		}),
		this.user()
	},
	methods: {
		user() {
			var data = new Date();
			var momentDate = this.$moment(data).format('YYYY-MM-DD')
			console.log(momentDate)
		}
	},
}
</script>
<style>
.index{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.rightContainer.content-collapse {
	left: 100px;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
	transition: left .3s ease-in-out;
}
</style>
