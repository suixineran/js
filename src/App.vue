<template>
  <h1> app 组件</h1>

  <canvasSelf>

  </canvasSelf>

<!--  <earch>-->

<!--  </earch>-->
<!--  <hr>-->
<!--  <earch01>-->

<!--  </earch01>-->


<!--  <h2> table 组件 的测试  想要解决 大数据渲染的问题</h2>-->
<!--  <Ctable>-->

<!--  </Ctable>-->


</template>

<script>
import Ctable from './components/table.vue'
import earch from './components/earch-echarts'
import earch01 from './components/earch01'
import canvasSelf from './components/canvas'

export default {
  name: 'App',
  components: {
    Ctable,
    earch,
    earch01,
    canvasSelf,
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {}
}
</script>

<style>
</style>
