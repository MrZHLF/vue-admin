<template>
  <div class="base">
      <div id="main" style="width:600px;height:400px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'chart',
	methods:{
		getChart() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));
			// 指定图表的配置项和数据
			        var option = {
					  backgroundColor: "#062a44",
					  series: [{
						name: '刻度',
						type: 'gauge',
						radius: '53%',
						min:0,//最小刻度
						max:16,//最大刻度
						splitNumber: 8, //刻度数量
						startAngle: 225,
						endAngle: -45,
						axisLine: {
						  show: true,
						  lineStyle: {
							width: 1,
							color: [[1,'rgba(0,0,0,0)']]
						  }
						},//仪表盘轴线
						axisLabel: {
						  show: true,
						  color:'#4d5bd1',
						  distance:25,
						  formatter:function(v){
								switch (v + '') {
									case '0' : return '0';
									case '2' : return '2W';
									case '4' : return '4W';
									case '6' : return '6W';
									case '8' : return '8W';
									case '10' : return '10W';
									case '12' : return '12W';
									case '14' : return '14W';
									case '16' : return '16W';
								}
							}
						},//刻度标签。
						axisTick: {
						  show: true,
						   splitNumber: 7,
						  lineStyle: {
							// color: '#fff',
							width: 1,
						  },
						  length: -8
						},//刻度样式
						splitLine: {
						  show: true,
						  length: -20,
						  lineStyle: {
							color: '#fff'
						  }
						},//分隔线样式
						detail: {
						  show: false
						},
						pointer: {
						  show: false
						}
					  },
						{
			
			
						  type: 'gauge',
						  radius: '40%',
						  center: ['50%', '50%'],
			
						  splitNumber: 0, //刻度数量
						  startAngle: 225,
						  endAngle: -45,
						  axisLine: {
							show: true,
							lineStyle: {
							  width: 15,
							  color: [
								[
								  0.9, new echarts.graphic.LinearGradient(
								  0, 0, 1, 0, [{
								  offset: 0,
								  color: '#5c53de'
								},
								  {
									offset: 1,
									color: '#18c8ff'
								  }
								]
								  )
								],
								[
								  1, '#413e54'
								]
							  ]
							}
						  },
						  //分隔线样式。
						  splitLine: {
							show: false,
						  },
						  axisLabel: {
							show: false
						  },
						  axisTick: {
							show: false
						  },
						  pointer: {
							show: false
						  },
						  title: {
							show: true,
							offsetCenter: [0, '-26%'], // x, y，单位px
							textStyle: {
							  color: '#fff',
							  fontSize: 20
							}
						  },
						  //仪表盘详情，用于显示数据。
						  detail: {
							show: true,
							offsetCenter: [0, '16%'],
							color: '#ffffff',
							formatter: function(params) {
						  return params
						},
						textStyle: {
						  fontSize: 44
						}
						},
						data: [{
						name: "当前毕业率",
						value: 90.61
						}]
					  }
					  ]
					};
					// 使用刚指定的配置项和数据显示图表。
					myChart.setOption(option);
		}
	},
	created() {
		this.getChart()
	}
}
</script>
<style scoped>

</style>
