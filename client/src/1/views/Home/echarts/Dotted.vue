<template>
	<div>
		<div id="listChart" ref="myChart" :style="{width: '100%', height: '400px'}"></div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		data() {
			return {
				category: [],
				lineData: [],
				barData:[],
				dottedBase: +new Date()
			};
		},
		mounted() {
			this.$nextTick(()=>{
				this.drawLine();
			})
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				// let listChart = this.$echarts.init(document.getElementById('listChart'));
				let listChart = this.$echarts.init(this.$refs.myChart)
				console.log(listChart)

				for (let i = 0; i < 20; i++) {
					let date = new Date(this.dottedBase += 3600 * 24 * 1000);
					// console.log(date)
					this.category.push([
						date.getFullYear(),
						date.getMonth() + 1,
						date.getDate()
					].join('-'));
					let b = Math.random() * 200;
					let d = Math.random() * 200;
					this.barData.push(b)
					this.lineData.push(d + b);
				};
				listChart.setOption({
					backgroundColor: '#0f375f',
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['line', 'bar'],
						textStyle: {
							color: '#ccc'
						}
					},
					xAxis: {
						data: this.category,
						axisLine: {
							lineStyle: {
								color: '#ccc'
							}
						}
					},
					yAxis: {
						splitLine: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: '#ccc'
							}
						}
					},
					series: [{
						name: 'line',
						type: 'line',
						smooth: true,
						showAllSymbol: true,
						symbol: 'emptyCircle',
						symbolSize: 15,
						data: this.lineData
					}, {
						name: 'bar',
						type: 'bar',
						barWidth: 10,
						itemStyle: {
							normal: {
								barBorderRadius: 5,
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[{
											offset: 0,
											color: '#14c8d4'
										},
										{
											offset: 1,
											color: '#43eec6'
										}
									]
								)
							}
						},
						data: this.barData
					}, {
						name: 'line',
						type: 'bar',
						barGap: '-100%',
						barWidth: 10,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[{
											offset: 0,
											color: 'rgba(20,200,212,0.5)'
										},
										{
											offset: 0.2,
											color: 'rgba(20,200,212,0.2)'
										},
										{
											offset: 1,
											color: 'rgba(20,200,212,0)'
										}
									]
								)
							}
						},
						z: -12,
						data: this.lineData
					}, {
						name: 'dotted',
						type: 'pictorialBar',
						symbol: 'rect',
						itemStyle: {
							normal: {
								color: '#0f375f'
							}
						},
						symbolRepeat: true,
						symbolSize: [12, 4],
						symbolMargin: 1,
						z: -10,
						data: this.lineData
					}]
				})
			}
		}
	}
</script>

<style>

</style>
