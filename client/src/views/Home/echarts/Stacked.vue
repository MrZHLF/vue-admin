<template>
	<div class="list">
		<div id="myChart" :style="{width: '100%', height: '400px'}"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		mounted(){
			this.drawLine();
		},
		methods:{
			
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				myChart.setOption({
					backgroundColor: '#0f375f',
						tooltip : {
							trigger: 'axis',
							axisPointer: {
								type: 'cross',
								label: {
									backgroundColor: '#6a7985'
								}
							}
						},
						legend: {
							data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
							//标题字体颜色
							textStyle: {
								color: '#fff'
							}
						},
						toolbox: {
							feature: {
								saveAsImage: {}
							}
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						xAxis : [
							{
								type : 'category',
								boundaryGap : false,
								data : ['周一','周二','周三','周四','周五','周六','周日'],
								axisLine: {
									//x轴坐标字体颜色
									lineStyle: {
										color: '#fff'
									}
								}
							}
						],
						yAxis : [
							{
								type : 'value',
								axisLine: {
									//y轴坐标字体颜色
									lineStyle: {
										color: '#fff'
									}
								}
							}
						],
						series : [
							{
								name:'邮件营销',
								type:'line',
								stack: '总量',
								areaStyle: {},
								data:[120, 132, 101, 134, 90, 230, 210],
							},
							{
								name:'联盟广告',
								type:'line',
								stack: '总量',
								areaStyle: {},
								data:[220, 182, 191, 234, 290, 330, 310]
							},
							{
								name:'视频广告',
								type:'line',
								stack: '总量',
								areaStyle: {},
								data:[150, 232, 201, 154, 190, 330, 410]
							},
							{
								name:'直接访问',
								type:'line',
								stack: '总量',
								areaStyle: {normal: {}},
								data:[320, 332, 301, 334, 390, 330, 320]
							},
							{
								name:'搜索引擎',
								type:'line',
								stack: '总量',
								label: {
									normal: {
										show: true,
										position: 'top',								
									},
								},
								areaStyle: {normal: {}},
								data:[820, 932, 901, 934, 1290, 1330, 1320]
							}
						]
				})
			}
		}
	}
</script>

<style>

</style>
