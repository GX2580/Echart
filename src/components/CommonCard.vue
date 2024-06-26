<template>
  <div class="common-card">
    <el-card shadow="hover">
      <div class="title">{{ title }}</div>
      <div class="value">{{ value }}</div>
      <div class="chart">
        <slot />
      </div>
      <div class="line"></div>
      <div class="footer"> 
        <slot name="footer" />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["title", "value"],
};
</script>
<style scoped lang="scss">
.common-card {
  width: 400px;
  height: 300px;

  .el-card {
    border-radius: 8px; // 圆角边框
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); // 添加阴影效果
  }

  .title {
    font-size: 18px; // 标题字体大小
    color: gray; // 标题颜色
    margin-bottom: 10px; // 标题下方间距
  }

  .value {
    font-weight: bold; // 加粗字体
    font-size: 30px; // 加大字体，可以根据需要调整大小
    color: black; // 数值颜色
    margin-bottom: 20px; // 数值下方间距
  }

  .chart {
    height: 60px; // 图表高度
    width: 90%; // 图表宽度
    margin-bottom: 15px; // 新增图表下方间距
    display: flex; // 使用 Flexbox 布局
    justify-content: center; // 水平居中
    align-items: center; // 垂直居中
  }

  .line {
    height: 1px;
    background-color: #e4e7ed; // 这是 Element 组件库中常用的分隔线颜色
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .footer {
    display: flex; // 使用 flex 布局
    justify-content: start; // 子元素两端对齐
    align-items: center; // 垂直居中对齐
    font-size: 18px; // 底部文字大小
    color: black; // 底部文字颜色
  }
}
</style>
