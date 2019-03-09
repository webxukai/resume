<template>
  <div>
    <div id="chart_example"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { setInterval } from "timers";
export default {
  name: "Echarts",
  props: ["echartOption", "dataEchart"],
  data() {
    return {
      echartOptionData: this.echartOption.series[0].data
    };
  },
  mounted() {
    this.runderEchart();
  },
  methods: {
    runderEchart() {
      let this_ = this;
      let myChart = echarts.init(document.getElementById("chart_example"));
      let option = this.echartOption;
      myChart.setOption(option);

      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  },
  watch: {
    dataEchart() {
      this.runderEchart();
    }
  },
  created() {}
};
</script>

<style>
h2 {
  text-align: center;
  padding: 30px;
  font-size: 18px;
}
#chart_example {
  width: 100%;
  height: 500px;
  margin: 0 auto;
}
</style>