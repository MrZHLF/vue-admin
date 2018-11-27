<template>
  <div class="container">
    <div id="listChart" ref="myChart" :style="{width: '100%', height: '800%'}"></div>
  </div>
</template>d

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let listChart = this.$echarts.init(this.$refs.myChart);
      listChart.setOption({
        title: {
          text: "中国金融数据分布图展示",
          subtext: "数据来源于统计年鉴，单位：万元",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}万吨"
        },

        dataRange: {
          min: 0,
          max: 4000,
          x: "left",
          y: "bottom",

          text: ["高", "低"], // 文本，默认为数值文本
          calculable: false,

          splitNumber: 0,

          color: [
            "orangered",
            "gold",
            "yellow",
            "green",
            "lightgreen",
            "lightgrey"
          ]
        },
        toolbox: {
          show: true,
          orient: "vertical",
          x: "right",
          y: "center",
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            dataZoom: {
              show: true
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        roamController: {
          show: true,
          x: "right",
          mapTypeControl: {
            china: true
          }
        },
        series: [
          {
            name: "value",
            type: "map",
            mapType: "china",
            roam: true,
            itemStyle: {
              normal: {
                label: {
                  show: true
                }
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            },
            data: [
              { name: "黑龙江", value: 3544.1 },
              { name: "吉林", value: 2805.7 },
              { name: "内蒙古", value: 2250.8 },
              { name: "山东", value: 2050.9 },
              { name: "河南", value: 1853.7 },
              { name: "河北", value: 1670.4 },
              { name: "辽宁", value: 1403.5 },
              { name: "山西", value: 862.7 },
              { name: "四川", value: 765.7 },
              { name: "云南", value: 747.3 },
              { name: "新疆", value: 705.1 },
              { name: "甘肃", value: 577.2 },
              { name: "陕西", value: 543.1 },
              { name: "安徽", value: 496.3 },
              { name: "湖北", value: 332.9 },
              { name: "贵州", value: 324.1 },
              { name: "广西", value: 280.7 },
              { name: "重庆", value: 259.7 },
              { name: "江苏", value: 252.2 },
              { name: "宁夏", value: 226.9 },
              { name: "湖南", value: 188.8 },
              { name: "天津", value: 107.3 },
              { name: "广东", value: 77.9 },
              { name: "北京", value: 49.4 },
              { name: "浙江", value: 31.1 },
              { name: "福建", value: 21.5 },
              { name: "青海", value: 18.6 },
              { name: "江西", value: 12.8 },
              { name: "上海", value: 2.1 },
              { name: "西藏", value: 0.8 },
              { name: "海南", value: "-" }
            ]
          }
        ]
			})
			console.log(listChart.setOption)
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  overflow: hidden;
}
</style>
