<template>
  <div id="container">
    <div class="header"></div>

    <div id="left1" ref="chartLeft1"></div>
    <div id="left2" ref="chartLeft2"></div>
    <div id="right1" ref="chartRight1"></div>
    <div id="right2" ref="chartRight2"></div>
  </div>
</template>

<script>
import initMap from "@/assets/map";
import {option} from "@/assets/echartsOption";
import echartsInit from "@/assets/echartsInit";
export default {
  name: "Home",
  mounted() {
    initMap()
    echartsInit(this.$refs.chartLeft1,option.optionLeft)
    echartsInit(this.$refs.chartLeft2,option.optionLeft0)
    echartsInit(this.$refs.chartRight1,option.optionRight)
    echartsInit(this.$refs.chartRight2,option.optionRight0)
  },

}
</script>

<style scoped>
@import "../assets/style.css";
</style>
