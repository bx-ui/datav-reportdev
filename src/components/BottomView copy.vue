<template>
  <div id="my-test">BottomView</div>
</template>

<script>
const mockData = [
  {
    legendname: "粉面粥店",
    value: 67,
    percent: "16.70%",
    name: "粉面粥店-16.70%",
  },
  {
    legendname: "简餐便当",
    value: 97,
    percent: "32.70%",
    name: "简餐便当-32.70%",
  },
  {
    legendname: "垃圾食品",
    value: 222,
    percent: "65.70%",
    name: "垃圾食品-65.70%",
  },
];
export default {
  mounted() {
    const chartDom = document.getElementById("my-test");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      title: [
        {
          text: "品类分布",
          textStyle: {
            color: "#666",
            fontSize: 14,
          },
          top: 20,
          left: 20,
        },
        {
          text: "累计订单量",
          subtext: "460",
          x: "14.6%",
          y: "43%",
          textAlign: "center",
          textStyle: {
            fontSize: 14,
            color: "#999",
          },
          subtextStyle: {
            fontSize: 28,
            color: "#eee",
          },
        },
      ],
      series: [
        {
          type: "pie",
          data: mockData,
          label: {
            normal: {
              show: true,
              position: "outter",
              formatter: function (params) {
                return params.data.legendname;
              },
            },
          },
          labelLine: {
            normal: {
              length: 5,
              length2: 3,
              smooth: true,
            },
          },
          clockWise: true,
          center: ["15%", "50%"],
          radius: ["45%", "60%"],
          itemStyle: {
            borderWidth: 4,
            borderColor: "#fff",
          },
        },
      ],
      legend: {
        type: "scroll",
        orient: "vertical",
        height: 150,
        left: "30%",
        top: "middle",
        textStyle: {
          color: "#888",
        },
      },
      tooltip: {},
    });
  },
};
</script>

<style lang="scss" scoped>
#my-test {
  height: 400px;
  margin-top: 20px;
  background: #fff;
}
</style>
