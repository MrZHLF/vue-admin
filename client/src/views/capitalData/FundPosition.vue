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
      function randomData() {
        return Math.round(Math.random() * 1000);
      }

      var data = [
        {
          name: "北京",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "天津",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "上海",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "重庆",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "河北",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "河南",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "云南",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "辽宁",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "黑龙江",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "湖南",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "安徽",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "山东",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "新疆",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "江苏",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "浙江",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "江西",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "湖北",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "广西",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "甘肃",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "山西",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "内蒙古",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "陕西",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "吉林",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "福建",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "贵州",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "广东",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "青海",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "西藏",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "四川",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "宁夏",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "海南",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "台湾",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "香港",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "澳门",
          value1: randomData(),
          value2: randomData()
        }
      ];

      var resultdata0 = [];
      var resultdata1 = [];
      var resultdata2 = [];
      var sum0 = 0;
      var sum1 = 0;
      var sum2 = 0;
      var titledata = [];
      for (var i = 0; i < data.length; i++) {
        var d0 = {
          name: data[i].name,
          value: data[i].value1 + data[i].value2
        };
        var d1 = {
          name: data[i].name,
          value: data[i].value1
        };
        var d2 = {
          name: data[i].name,
          value: data[i].value2
        };
        titledata.push(data[i].name);
        resultdata0.push(d0);
        resultdata1.push(d1);
        resultdata2.push(d2);
        sum0 += data[i].value1 + data[i].value2;
        sum1 += data[i].value1;
        sum2 += data[i].value2;
      }

      function NumDescSort(a, b) {
        return a.value - b.value;
      }

      resultdata0.sort(NumDescSort);
      resultdata1.sort(NumDescSort);
      resultdata2.sort(NumDescSort);
			let listChart = this.$echarts.init(this.$refs.myChart);
			console.log(listChart)
      listChart.setOption ({
        title: [
          {
            text: "中国金额数据分析",
            subtext: "纯属虚构",
            left: "center"
          },
          {
            text: "全部: " + sum0,
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          },
          {
            text: "投资: " + sum1,
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          },
          {
            text: "理财: " + sum2,
            right: 120,
            top: 40,
            width: 100,
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          }
        ],
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["全部", "投资", "理财"],
          selectedMode: "single"
        },
        visualMap: {
          min: 0,
          max: 2500,
          left: "left",
          top: "bottom",
          text: ["高", "低"],
          calculable: true,
          colorLightness: [0.2, 100],
          color: ["#c05050", "#e5cf0d", "#5ab1ef"],
          dimension: 0
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        grid: {
          right: 40,
          top: 100,
          bottom: 40,
          width: "30%"
        },
        xAxis: [
          {
            position: "top",
            type: "value",
            boundaryGap: false,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            data: titledata,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        series: [
          {
            z: 1,
            name: "全部",
            type: "map",
            map: "china",
            left: "10",
            right: "35%",
            top: 100,
            bottom: "35%",
            zoom: 0.75,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            //roam: true,
            data: resultdata0
          },
          {
            z: 1,
            name: "投资",
            type: "map",
            map: "china",
            left: "10",
            right: "35%",
            top: 100,
            bottom: "35%",
            zoom: 0.75,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            //roam: true,
            data: resultdata1
          },
          {
            z: 1,
            name: "理财",
            type: "map",
            map: "china",
            left: "10",
            right: "35%",
            top: 100,
            bottom: "35%",
            zoom: 0.85,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            //roam: true,
            data: resultdata2
          },
          {
            name: "全部",
            z: 2,
            type: "bar",
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata0
          },
          {
            name: "投资",
            z: 2,
            type: "bar",
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata1
          },
          {
            name: "理财",
            z: 2,
            type: "bar",
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata2
          },
          {
            name: "全部",
            z: 2,
            type: "pie",
            radius: ["17%", "25%"],
            center: ["30%", "82.5%"],
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata0
          },
          {
            name: "投资",
            z: 2,
            type: "pie",
            radius: ["17%", "25%"],
            center: ["30%", "82.5%"],
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata1
          },
          {
            name: "理财",
            z: 2,
            type: "pie",
            radius: ["17%", "25%"],
            center: ["30%", "82.5%"],
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata2
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
