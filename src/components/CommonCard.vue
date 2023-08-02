<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart"><slot /></div>
    <div class="line" />
    <div class="footer"><slot name="footer" /></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #666;
}
.value {
  font-size: 28px;
  color: #000;
  font-weight: 900;
  line-height: 55px;
}
.chart {
  height: 50px;
}
.line {
  height: 1px;
  background-color: rgba($color: #000000, $alpha: 0.3);
  margin: 6px 0px;
}
.footer {
  font-size: 12px;
}
</style>
