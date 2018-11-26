<template>
	<div class="base">
		<el-row>
			<el-col :span="12">
				<div class="grid-content bg-purple">
					<Stacked/>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<Dotted/>
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

</style>
