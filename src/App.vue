<template>
 <!--  <el-card style="width: 400px; height: 300px">
    <div slot="header">
      <div class="container" style="width: 400px; height: 200px">
        <v-chart :option="options" />
      </div>
    </div>
    <span>退货率: 10%</span>
  </el-card> -->
  <div class="today-user">
    <CommonCard title="今日用户交易数" value="30">
      <template #default>
        <v-chart :option="options" />
      </template>
      <template #footer>
        <span>退货率</span>
        <span class="css-1">3.57%</span>
      </template>
    </CommonCard>
  </div>
</template>
<script>
import { fetchReportData } from "@/api/data.js"; // 确保路径正确
import CommonCard from "@/components/CommonCard.vue";

export default {
  data() {
    return {
      options: {
        tooltip: {},
        xAxis: {
          xAxis:{
            type: "category",
            show: false,
            data:[
              "00:00",
            "03:00",
            "05:00",
            "07:00",
            "09:00",
            "11:00",
            "13:00",
            "15:00",
            "17:00",
            "19:00",
            "21:00",
            "23:00",
            ],
          }
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            name: "实时交易量",
            type: "bar",
            data: [], // 初始数据为空
            itemStyle: {
              color: "#409EFF",
            },
            barWidth: "60%", // 加宽每个柱子的宽度
          },
        ],
        grid: {
          left:0,
          right:0,
          top:0,
          bottom: 0,
        },
      },

      reportData: null, // 用于存储从 fetchReportData 获取的数据
    };
  },
  components: { CommonCard },
  async mounted() {
    try {
      const data = await fetchReportData();
      this.reportData = data;
      console.log(data);
      console.log(data.orderLastDay);
      console.log(data.orderTrend);

      // 更新图表数据
      if (data.orderUserTrend && data.orderUserTrend.length > 0) {
        this.options.series[0].data = data.orderUserTrend;
      }
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
