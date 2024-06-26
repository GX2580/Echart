<template>
  <div class="total-user">
    <CommonCard title="累计用户数" value="768923">
      <v-chart :option="option" />
      <template #footer>
        <div class="wrapper">
          <div>
            <span>日同比</span>
            <span class="css-1">12.35%</span>
            <span class="increase"></span>
          </div>
          <div>
            <span>月同比</span>
            <span class="css-1">23.97%</span>
            <span class="decrease"></span>
          </div>
        </div>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import { fetchReportData } from "@/api/data.js"; // 确保路径正确
import CommonCard from "@/components/CommonCard.vue";
import VChart from "vue-echarts"; // 确保你已经安装了 vue-echarts 并正确导入

export default {
  data() {
    return {
      options: {
        xAxis: {
          type: "category",
          show: false,
          boundaryGap:false,
        },
        yAxis: {
          type: "value",
          show: false,
        },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        series: [
          {
            type: "line",
            data: [], // 初始数据为空
            areaStyle: {
              color: "purple",
            },
            itemStyle: {
            opacity: 0,
          },
          lineStyle: {
            opacity: 0,
          },
           smooth: true,
          },
        ],
      },
      reportData: null, // 用于存储从 fetchReportData 获取的数据
    };
  },
  components: { CommonCard, VChart },
  async mounted() {
    await this.initChart();
  },
  methods: {
    async initChart() {
      try {
        const data = await fetchReportData();
        this.reportData = data;
        // 更新图表数据
        if (data.orderTrend && data.orderTrend.length > 0) {
          this.options.series[0].data = data.orderTrend;
        }
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.css-1 {
  color: black;
  font-weight: bolder;
  margin-left: 5px;
}
</style>
