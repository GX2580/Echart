<template>
  <div id="app">
    <total-sale class="left-margin"></total-sale>
    <total-order></total-order>
    <today-user></today-user>
    <total-user></total-user> <!-- Add this line to include the totalUser component -->
  </div>
</template>

<script>
import TotalSale from '@/components/tables/totalSale.vue';
import TotalOrder from '@/components/tables/totalOrder.vue';
import TodayUser from '@/components/tables/todayUser.vue';
import TotalUser from '@/components/tables/totalUser.vue'; // Import the totalUser component

export default {
  components: {
    TodayUser,
    TotalOrder,
    TotalSale,
    TotalUser // Register the totalUser component
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: space-around;
  align-items: stretch;

  > * {
    flex: 1;
    // margin: 0 10px;
    // border: 1px solid #ccc;
    // padding: 20px;
    box-sizing: border-box;
  }

  .left-margin {
    margin-left: 20px; /* 你可以根据需要调整这个值 */
  }
}
</style>
