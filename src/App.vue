<template>
  <el-card style="width: 400px; height: 300px">
    <div slot="header">
      <div class="container" style="width: 400px; height: 200px">
        <v-chart :option="options" />
      </div>
    </div>
    <span>退货率: 10%</span>
  </el-card>
</template>
<script>
import { fetchReportData } from "@/api/data.js"; // 确保路径正确

export default {
  data() {
    return {
      options: {
        title: {
          text: "今日用户交易数",
          textStyle: {
            fontSize: 18,
            color: "#333",
          },
        },
        tooltip: {},
        xAxis: {
          show: false, // 隐藏 X 轴
        },
        yAxis: {
          show: false, // 隐藏 Y 轴
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [], // 初始数据为空
            itemStyle: {
              color: "#409EFF",
            },
            barWidth: "60%", // 加宽每个柱子的宽度
          },
        ],
        grid: {
          height: "80%", // 增加表格的高度
        },
      },

      reportData: null, // 用于存储从 fetchReportData 获取的数据
    };
  },
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
