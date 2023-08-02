<template>
  <common-card title="累计订单量" value="¥ 7,209,909">
    <template v-slot:default>
      <div id="total-order-chart" style="width: 100%; height: 100%" />
    </template>
    <template v-slot:footer>
      <div>
        <span style="margin-right: 6px">昨日订单量</span>
        <span style="font-weight: 600">¥ 2,000,000</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "../mixins/commonCardMixin";

export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById("total-order-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      xAxis: {
        show: false,
        type: "category",
        boundaryGap: false,
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "line",
          data: [
            300, 296, 222, 234, 254, 70, 50, 129, 77, 163, 303, 202, 206, 128,
          ],
          lineStyle: {
            width: 0,
          },
          itemStyle: {
            width: 0,
            opacity: 0,
          },
          areaStyle: {
            color: "pink",
          },
          smooth: true,
        },
      ],
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    });
  },
};
</script>
