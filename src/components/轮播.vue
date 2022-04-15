<template>


  <div class="fixBox">
    <div id="mesBox" class="anim">
      <div class=" item" v-for="(item,index) in options" :key="index">
        {{ item.name }}
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "轮播",
  data() {
    return {
      options: [
        {name: 111},
        {name: 112},
        {name: 113},
        {name: 114},
        {name: 115}
      ],
      marginTop: 0
    }
  },

  created() {
    setInterval(this.scroll, 2000)
  },
  methods: {
    scroll() {
      var lineHeight = 24
      var lineCount = this.options.lenght
      //滚动到显示区域底部时 数组累加
      if (Math.abs(this.marginTop) >= (lineHeight * lineCount) - lineHeight * 4) {
        // this.marginTop = 0
        this.options = this.options.contact(this.options)
      } else {
        this.marginTop -= lineHeight
      }
      document.getElementById('mesBox').style.top = this.marginTop + 'px'
    }
  }
}
</script>

<style scoped>
.fixBox {
  width: 400px;
  height: 96px;
  overflow: hidden;
  position: relative;

#mesBox {
  position: absolute;
  top: 0;
  width: 400px;

.item {
  height: 24px;
  line-height: 24px;
}

}
.anim {
  transition: all 1s;
}

}
</style>
