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
