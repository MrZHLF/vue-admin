<template>
  <div class="container">
    <div id="listChart" ref="myChart" :style="{width: '100%', height: '800%'}"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { city, geoCoordMap } from './cityData.js'
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.$nextTick(()=>{
      this.drawLine()
    })
  },
  methods: {
    drawLine() {
      let listChart = this.$echarts.init(this.$refs.myChart);
      var convertData = function (city) {
        var res = [];
        for (var i = 0; i < city.length; i++) {
          var geoCoord = geoCoordMap[city[i].name];
          if (geoCoord) {
            res.push({
              name: city[i].name,
              value: geoCoord.concat(city[i].value)
            });
          }
        }
        return res; 
      };
      console.log(convertData)
      listChart.setOption({
        backgroundColor: '#404a59',
        title: {
          text: '全国主要城市空气质量',
          subtext: 'data from PM25.in',
          sublink: 'http://www.pm25.in',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip : {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x:'right',
          data:['pm2.5'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series : [
          {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(city),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(city.sort(function (a, b) {
              return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            zlevel: 1
          }
        ]
      })
    }
  }
};
</script>

<style scoped>
  .container {
    width: 100%;
    overflow: hidden;
  }
  #listChart {
    position: relative;
  }
</style>
