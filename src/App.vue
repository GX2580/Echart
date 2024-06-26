<template>
  <div id="app">
    <total-sale></total-sale>
    <today-user></today-user>
    <total-order></total-order>
   
  </div>
</template>

<script>
import TotalSale from '@/components/tables/totalSale.vue';
import TotalOrder from '@/components/tables/totalOrder.vue';
import TodayUser from '@/components/tables/todayUser.vue';


export default {
  components: {
    TodayUser,
    TotalOrder,
    TotalSale
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  > * {
    flex: 1;
    margin: 0 10px;
    // border: 1px solid #ccc;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
