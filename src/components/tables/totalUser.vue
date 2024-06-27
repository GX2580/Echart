
<template>
    <div class="total-user">
        <CommonCard title="累计用户数" :value="reportData ? reportData.totalUser.toString() : '0'">
          <v-chart :option="options" />
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
    import VChart from "vue-echarts"; // 确保已安装vue-echarts并正确导入
    
    export default {
      data() {
        return {
          options: {
            xAxis: {
              type: "value",
              show: false,
            },
            yAxis: {
              type: "category",
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
                type: "bar",
                data: [130], // 初始数据为空
                itemStyle: {
                  color: "green",
                },
                barWidth: 10,
                stack: "总量",
              },
              {
                type: "bar",
                data: [30], 
                itemStyle: {
                  color: "#ddd",
                },
                barWidth: 10,
                stack: "总量",
              },
              {
                type: "custom",
                renderItem: (params, api) => {
                  const endPoint = api.coord([api.value(0), 0]);
                  return {
                    type: "group",
                    children: [
                      {
                        type: "path",
                        shape: {
                          d: "M511.744 319.999l-383.744 383.744h767.488l-383.744-383.744z",
                          x: endPoint[0] - 5,
                          y: 35,
                          width: 10,
                          height: 10,
                          layout: "cover",
                        },
                        style: {
                          fill: "green",
                        },
                      },
                      {
                        type: "path",
                        shape: {
                          d: "M889.696 320.8H158.848l365.504 365.536 365.344-365.536z",
                          x: endPoint[0] - 5,
                          y: 5,
                          width: 10,
                          height: 10,
                          layout: "cover",
                        },
                        style: {
                          fill: "green",
                        },
                      },
                    ],
                  };
                },
              },
            ],
          },
          data:[130],
          reportData: null, // 存储从fetchReportData获取的数据
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
            if (data.totalUser && data.totalUser.length > 0) {
              this.options.series[0].data = data.totalUser;
            }
          } catch (error) {
            console.error("Error fetching report data:", error);
          }
        },
      },
    };
    </script>
    
    <style lang="scss" scoped>
    .wrapper {
      display: flex;
      gap: 10px;
    }
    </style>
    