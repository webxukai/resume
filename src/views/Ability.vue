<template>
  <div>
    <div>
      <h4>基本信息</h4>
      <div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item of aboutMe" :key="item.id">
            <div class="grid-content bg-purple title">{{item.infoTitle}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item of aboutMe" :key="item.id">
            <div class="grid-content bg-purple title">{{item.infoContent}}</div>
          </el-col>
        </el-row>
      </div>
      <h4>教育背景</h4>
      <div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item of aboutMe" :key="item.id">
            <div class="grid-content bg-purple title">{{item.eduTitle}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item of aboutMe" :key="item.id">
            <div class="grid-content bg-purple title">{{item.eduContent}}</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <h4>专业技能</h4>
    <AbilityEcharts v-bind:echartOption="echartOption"/>
  </div>
</template>

<script>
import AbilityEcharts from "@/components/Echarts.vue";
export default {
  components: {
    AbilityEcharts
  },
  data() {
    return {
      aboutMe: [
        {
          id: "001",
          infoTitle: "姓名",
          infoContent: "许凯",
          eduTitle: "时间",
          eduContent: "2014.9-2018.6"
        },
        {
          id: "002",
          infoTitle: "籍贯",
          infoContent: "江苏",
          eduTitle: "学校",
          eduContent: "江苏大学京江学院"
        },
        {
          id: "003",
          infoTitle: "电话",
          infoContent: "18852859526",
          eduTitle: "专业",
          eduContent: "计算机科学与技术"
        },
        {
          id: "004",
          infoTitle: "邮箱",
          infoContent: "790134972@qq.com",
          eduTitle: "性质",
          eduContent: "本科"
        }
      ],
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
            data: [
              "JS",
              "HTML5/CSS3",
              "ES6",
              "网络",
              "VUE",
              "git",
              "小程序",
              "webpack"
            ],
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
            name: "熟练度",
            type: "bar",
            barWidth: "60%",
            data: [900, 600, 700, 700, 600, 600, 500, 400]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
