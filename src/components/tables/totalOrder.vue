<template>
    <div class="total-order">
      <CommonCard title="累计订单额" value="13145">
        <template #default>
          <v-chart :option="options" />
        </template>
        <template #footer>
          <span>昨日销售额</span>
          <span v-if="reportData" class="css-1">￥{{ reportData.orderLastDay }}</span>
          <span v-else class="css-1">加载中...</span>
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
  