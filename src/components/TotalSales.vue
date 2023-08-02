<template>
  <common-card title="累计销售额" value="¥ 32,039,165">
    <template v-slot:default>
      <div class="chart-container">
        <div class="item">
          <span>日同比</span>
          <span>314.31%</span>
          <div class="increase" />
        </div>
        <div class="item">
          <span>月同比</span>
          <span>435.75%</span>
          <div class="increase" />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div>
        <span style="margin-right: 6px">昨日销售额</span>
        <span style="font-weight: 600">¥ 30,000,000</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "../mixins/commonCardMixin";

export default {
  mixins: [commonCardMixin],
};
</script>

<style lang="scss" scoped>
.chart-container {
  font-size: 12px;
  color: rgba($color: #000000, $alpha: 0.7);
  .item {
    margin-top: 6px;
    display: flex;
    align-items: center;
    span {
      margin-right: 3px;
    }
    .increase {
      width: 0;
      height: 0;
      border-width: 4px;
      border-color: transparent transparent red transparent;
      border-style: solid;
      margin-left: 6px;
      margin-top: -4px;
    }
  }
}
</style>
