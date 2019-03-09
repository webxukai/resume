<template>
  <div>
    <AbilityEcharts v-bind:echartOption="echartOption" v-bind:dataEchart="dataEchart"/>
    <table class="wrapper-table">
      <tr>
        <th v-for="(item,index) of dataXAxis" :key="index">{{item}}</th>
      </tr>
      <tr>
        <td class="td" v-for="(item,index) of dataEchart" :key="index">{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import EleTable from "@/components/EleTable.vue";
import AbilityEcharts from "@/components/Echarts.vue";
export default {
  components: {
    EleTable,
    AbilityEcharts
  },
  data() {
    return {
      dataEchart: [900, 600, 700, 100, 200, 300, 400],
      dataXAxis: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      echartOption: {
        color: ["#409EFF"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: [
          {
            type: "category",
            data: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "心情",
            type: "bar",
            barWidth: "60%",
            data: [900, 600, 700, 100, 200, 300, 400]
          }
        ]
      }
    };
  },
  methods: {
    changeNumber() {
      setInterval(() => {
        let arrTemp = [];
        for (let i = 0; i < 7; i++) {
          arrTemp.push(Math.floor(Math.random() * 1000));
        }
        this.echartOption.series[0].data = arrTemp;
        this.dataEchart = arrTemp;
      }, 10000);
    }
  },
  mounted() {
    this.changeNumber();
  }
};
</script>

<style lang="stylus" scoped>
.wrapper-table {
  width: 80%;
  margin: 0 auto;
  height: 200px;
  border: 1px solid #333;

  .td {
    text-align: center;
    color: #333;
  }
}
</style>

