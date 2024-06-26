
<template>
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
            type: "category",
            show: false,
            data: [
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
                color: "RGB(92, 123, 217)",
              },
              barWidth: "60%", // 加宽每个柱子的宽度
            },
          ],
          grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        reportData: null, // 用于存储从 fetchReportData 获取的数据
      };
    },
    components: { CommonCard },
    async mounted() {
      // 确保在窗口加载完成后执行图表初始化
      window.onload = () => {
        this.initChart();
      };
  
      // 如果窗口已经加载完成，直接执行图表初始化
      if (document.readyState === 'complete') {
        this.initChart();
      }
    },
    methods: {
      async initChart() {
        try {
          const data = await fetchReportData();
          this.reportData = data;
          // 更新图表数据
          if (data.orderUserTrend && data.orderUserTrend.length > 0) {
            this.options.series[0].data = data.orderUserTrend;
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
  