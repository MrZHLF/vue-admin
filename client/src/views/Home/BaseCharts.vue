<template>
	<div class="base-charts">
		<el-row>
			<el-col :span="12" class="list-item">
				<div class="grid-content bg-purple">
					<Dotted/>
				</div>
			</el-col>
			<el-col :span="12" class="list-item">
				<div class="grid-content bg-purple-light">
					<Stacked/>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import Stacked from './echarts/Stacked'
	import Dotted from './echarts/Dotted'
	export default {
	  name: 'Nofind',
		data(){
			return {
				
			}
		},
		components:{
			Stacked,
			Dotted
		}
	}
</script>
<style scoped>
.base-charts {
	width: 100%;
	overflow: hidden;
}
.list-item {
	padding-left: 20px;
	padding-right: 20px;
	overflow: hidden;
}
</style>
