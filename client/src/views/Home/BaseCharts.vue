<template>
  <div class="base">
      <div id="main" style="width:600px;height:400px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'chart',
	data() {
		return {
			user:{
				USERCODE:'4105230166',
				USERPASSWORD:'000000'
			}
		}
	},
	methods:{
		getuserInfo() {
			this.$axios.post('/api/logon.do',this.user).then(res => {
				console.log(res)
			})
		}
	},
	created() {
		// this.getChart();
		this.getuserInfo()
	}
}
</script>
<style scoped>

</style>
