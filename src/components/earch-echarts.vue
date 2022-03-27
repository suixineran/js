<template>
<div id="earch" style="width: 500px; height: 500px;"></div>
</template>

<script>


import * as echarts from 'echarts';
import 'echarts-gl';
export default {
  name: "earch-echarts",
  mounted() {
    this.getDom()
  },
  methods: {
  getDom() {
    console.log('--------sssss')
    // let earch =
    var ROOT_PATH =
        'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

    var chartDom = document.getElementById('earch');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      backgroundColor: '#b11b1b',
      globe: {
        baseTexture: ROOT_PATH + '/data-gl/asset/earth.jpg',
        heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
        displacementScale: 0.1,
        shading: 'lambert',
        environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
        light: {
          ambient: {
            intensity: 0.1
          },
          main: {
            intensity: 1.5
          }
        },
        layers: [
          {
            type: 'blend',
            blendTo: 'emission',
            texture: ROOT_PATH + '/data-gl/asset/night.jpg'
          },
          {
            type: 'overlay',
            texture: ROOT_PATH + '/data-gl/asset/clouds.png',
            shading: 'lambert',
            distance: 5
          }
        ]
      },
      series: []
    };
    console.log('----------', option)
    option && myChart.setOption(option);


  } ,

  },

}
</script>

<style scoped>

</style>
