<template>
    <div class="total-sale">
      <CommonCard title="累计销售量" value="230000">
        <template #default>
          <div class="comparison">
            <div class="comparison-item">
              <span class="light-text">日同比</span>
              <span class="percentage">2.33%</span>
              <span class="increase"></span>
            </div>
            <div class="comparison-item">
              <span class="light-text">月同比</span>
              <span class="percentage">4.14%</span>
              <span class="increase"></span>
            </div>
          </div>
        </template>
        <template #footer>
          <span>昨日销售额</span>
          <span class="bold-dark">￥200000</span>
        </template>
      </CommonCard>
    </div>
  </template>
  
  <script>
  import CommonCard from "@/components/CommonCard.vue";
  
  export default {
    components: {
      CommonCard,
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .comparison {
    display: flex;
    flex-direction: column;
    font-size: 1.4em; // 让 default 插槽内的文字字体大一点
    justify-content: flex-start;
    // background-color: pink;
    margin-left: -130px;
  
    .comparison-item {
      display: flex;
      align-items: center;
      justify-content: flex-start; // 让日同比文字和月同比文字居中靠左对齐
      margin: 5px auto;
  
      .light-text {
        color: rgb(83, 83, 83); 
      }
  
      .percentage {
        margin-left: 6px; // 增加文字和百分比数字之间的空隙
        color: rgb(50, 50, 50); // 让百分比数字的颜色更深一点
      }
  
      span.increase {
        display: inline-block;
        width: 0;
        height: 0;
        border-width: 4px;
        border-style: solid;
        border-color: transparent transparent green transparent;
        margin-left: 10px;
        transform: translateY(-50%);
      }
    }
  }
  
  .bold-dark {
    font-weight: bold; // 让字体更粗
    color: rgb(50, 50, 50); // 让颜色更深
  }
  </style>
  