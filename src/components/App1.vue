<template>
  <div>
    <div id="myChart"></div>
    <div id="ms">{{msg}}</div>
  </div>

</template>
<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎大家关注我',

    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){

      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))

      // 绘制图表
      myChart.setOption({
        series: [{
          type: 'liquidFill',
          radius: '50%',
          data: [0.6],
          color: 'rgba(77,205,110,100)',
          label: {
            normal: {
              color: '#fff',
              insideColor: 'transparent',
              textStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'Microsoft YaHei'
              }
            }
          },
          outline: {
            show: true,
            borderDistance: 5,
            itemStyle: {
              borderColor: 'rgba(67,209,100,1)',
              borderWidth: 2
            }
          },
          backgroundStyle: {
            color: 'rgba(67,209,100,.3)'
          }
        }]
      });
    }
  }
}
</script>
<style scoped>
#myChart{
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>

