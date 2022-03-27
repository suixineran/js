<template>
<div id="flower">

</div>
</template>

<script>
export default {
  name: "canvas",
  mounted() {
    this.getCanvas()
  },
  methods: {
    getCanvas() {
      let c = document.getElementById('flower')
      // var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      ctx.fillStyle="#0000ff";
      ctx.fillRect(20,20,150,100);
    },
  },
}
</script>

<style scoped>

</style>
