<template>
  <common-card title="今日交易用户数" value="2,611,234">
    <template v-slot:default>
      <div id="today-users-chart" style="width: 100%; height: 100%" />
    </template>
    <template v-slot:footer>
      <div>
        <span style="margin-right: 6px">退货率</span>
        <span style="font-weight: 600">5.82%</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "../mixins/commonCardMixin";

export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById("today-users-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      color: ["#3398DB"],
      tooltip: {
        show: true,
      },
      xAxis: {
        show: false,
        type: "category",
        data: [
          "0:00",
          "1:00",
          "2:00",
          "3:00",
          "4:00",
          "5:00",
          "6:00",
          "7:00",
          "8:00",
          "9:00",
          "10:00",
          "11:00",
        ],
      },
      yAxis: {
        show: false,
        type: "value",
      },
      series: [
        {
          type: "bar",
          data: [300, 296, 222, 234, 254, 129, 77, 163, 303, 202, 206, 128],
          barWidth: "60%",
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
