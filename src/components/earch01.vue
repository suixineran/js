<template>
  <div id="earch01" style="width: 500px; height: 500px;"></div>
</template>

<script>
/*
* require  引用了本地图片
* */

import * as echarts from 'echarts';
import 'echarts-gl';

export default {
  name: "earch-echarts",
  mounted() {
    this.getDom()
  },
  methods: {
    getDom() {
      // let earch =
      var ROOT_PATH =
          'src/components/img/';

      var chartDom = document.getElementById('earch01');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        backgroundColor: '#b11b1b',
        globe: {
          baseTexture: require('./img/earth.jpeg'),
          heightTexture: require('./img/bathymetry_bw_composite_4k.jpeg'),
          displacementScale: 0.01,
          shading: 'lambert',
          environment: require('./img/starfield.jpeg'),
          light: {
            ambient: {
              intensity: 0.5
            },
            main: {
              intensity: 1.5
            }
          },
          layers: [
            {
              type: 'blend',
              blendTo: 'emission',
              texture: require('./img/night.jpeg')
            },
            {
              type: 'overlay',
              texture: require('./img/clouds.png'),
              shading: 'lambert',
              distance: 5
            }
          ]
        },
        series: []
      };

      option && myChart.setOption(option);


    },

  },

}
</script>

<style scoped>

</style>

