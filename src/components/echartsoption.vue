<template>
<!--  11111-->
  <div id="earch01" style="width: 700px; height: 700px;"></div>
</template>
<script>
/*
* require  引用了本地图片
* */

import * as echarts from 'echarts';

export default {
  name: "earch-echarts",
  mounted() {
    this.getDom()
  },
  methods: {
    getDom() {

      var chartDom = document.getElementById('earch01');
      var myChart = echarts.init(chartDom);
      var data = [
        ['product', '2012000', '2013', '2014', '2015', '2016', '2017'],
        ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ];
      var myColor = [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(128, 255, 165)'
        },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(0, 221, 255)'
        },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(55, 162, 255)'
        },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(255, 0, 135)'
        },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(255, 191, 0)'
        },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      ];
      var myColor2 = [
        'linear-gradient(rgb(128, 255, 165), rgb(1, 191, 236))',
        'linear-gradient(rgb(0, 221, 255),rgb(77, 119, 255))',
        'linear-gradient(rgb(55, 162, 255), rgb(116, 21, 219))',
        'linear-gradient(rgb(255, 0, 135),rgb(135, 0, 157))',
        'linear-gradient(rgb(255, 191, 0), rgb(224, 62, 76))'
      ];
      let option = {
        dataset: {
          source: data
        },
        color: myColor,
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function(param) {
            console.log(param);
            let str = '';
            str += param[0].axisValue + '</br>';
            for (var k = 0; k < param.length; k++) {
              console.log(param[k]);
              if (param[k].seriesName.indexOf('series') !== 0) {
                str +=
                    '<div style="float:left;width:68%">' +
                    '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-image:' +
                    myColor2[k] +
                    ';"></span>' +
                    param[k].seriesName +
                    ':' +
                    '</div>' +
                    '<div style="float:right;width:32%">' +
                    param[k].value[param[k].encode.y[0]] +
                    '</div>' +
                    '<br>';
              }
            }
            return str;
          }
        },
        // legend: {},
        grid: {
          left: '13%',
          right: '4%',
          bottom: '3%',
          containLabel: false
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          type: 'line',
          stack: 'Total'
        },
          {
            type: 'line',
            stack: 'Total'
          },
          {
            type: 'line',
            stack: 'Total'
          },
          {
            type: 'line',
            stack: 'Total'
          },
          {
            type: 'line',
            stack: 'Total'
          }
        ]
      };

      option && myChart.setOption(option);


    },

  },

}
</script>

<style scoped>

</style>

