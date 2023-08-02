<template>
  <common-card title="累计用户数" value="3,644,574">
    <template v-slot:default>
      <div id="total-user-chart" style="width: 100%; height: 100%" />
    </template>
    <template v-slot:footer>
      <div class="bottom">
        <div class="item">
          <span style="margin-right: 6px">日同比</span>
          <span style="font-weight: 600">264.38%</span>
        </div>
        <div class="item">
          <span style="margin-right: 6px">月同比</span>
          <span style="font-weight: 600">355.48%</span>
        </div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "../mixins/commonCardMixin";

export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById("total-user-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      xAxis: {
        show: false,
        type: "value",
      },
      yAxis: {
        show: false,
        type: "category",
      },
      series: [
        {
          type: "bar",
          data: [200],
          stack: "总量",
          barWidth: 10,
          itemStyle: {
            color: "#45c946",
          },
        },
        {
          type: "bar",
          data: [250],
          stack: "总量",
          barWidth: 10,
          itemStyle: {
            color: "#eee",
          },
        },
        {
          type: "custom",
          data: [200],
          stack: "总量",
          renderItem(params, api) {
            const value = api.value(0);
            const endPoint = api.coord([value, 0]);
            return {
              type: "group",
              position: endPoint,
              children: [
                {
                  type: "path",
                  shape: {
                    d: "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: "cover",
                  },
                  style: {
                    fill: "#45c946",
                  },
                },
                {
                  type: "path",
                  shape: {
                    d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z",
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: "cover",
                  },
                  style: {
                    fill: "#45c946",
                  },
                },
              ],
            };
          },
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
<style scoped lang="scss">
.bottom {
  display: flex;
  align-items: center;
  .item {
    margin-right: 6px;
  }
}
</style>
