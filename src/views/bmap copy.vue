<template>
  <div id="map-container" />
</template>

<script>
import { data, geoCoordMap } from "@/mock/chart";
import "echarts/extension/bmap/bmap";
export default {
  name: "BMap",
  data() {
    return {
      coordMapList: [],
      top5List: [],
    };
  },
  methods: {
    getCoordMapList() {
      const allPointList = data
        .sort((a, b) => b.value - a.value)
        .reduce((memo, item) => {
          const posiData = geoCoordMap[item.name];
          memo.push({
            name: item.name,
            value: [...posiData, item.value],
          });
          return memo;
        }, []);
      this.coordMapList = allPointList.splice(5, allPointList.length);
      this.top5List = allPointList.splice(0, 5);
    },
  },
  mounted() {
    // 获取所有的数据源
    this.getCoordMapList();

    const chartDom = document.getElementById("map-container");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      title: {
        text: "慕课外卖销售数据大盘",
        subtext: "销售趋势统计",
        left: "center",
      },
      bmap: {
        key: "G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb",
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
          styleJson: [
            {
              featureType: "water",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "land",
              elementType: "all",
              stylers: {
                color: "#f3f3f3",
              },
            },
            {
              featureType: "railway",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "highway",
              elementType: "all",
              stylers: {
                color: "#fdfdfd",
              },
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "arterial",
              elementType: "geometry",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "green",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "subway",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "manmade",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "local",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "arterial",
              elementType: "labels",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "boundary",
              elementType: "all",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "building",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "label",
              elementType: "labels.text.fill",
              stylers: {
                color: "#999999",
              },
            },
          ],
        },
      },
      series: [
        {
          name: "sales",
          type: "scatter",
          coordinateSystem: "bmap",
          data: this.coordMapList,
          encode: {
            value: 2,
          },
          itemStyle: {
            color: "purple",
          },
          symbolSize: function (val) {
            return val[2] / 10;
          },
          label: {
            show: false,
            position: "right",
            formatter: function (val) {
              return `${val.data.name}-${val.data.value[2]}`;
            },
          },
          emphasis: {
            label: {
              show: true,
            },
          },
        },
        {
          name: "top5",
          type: "effectScatter",
          coordinateSystem: "bmap",
          data: this.top5List,
          symbolSize: function (val) {
            console.log(val);
            return val[2] / 10;
          },
          label: {
            show: true,
            position: "right",
            formatter: function (val) {
              return `${val.data.name}-${val.data.value[2]}`;
            },
          },
          hoverAnimation: true,
          itemStyle: {
            color: "purple",
            shadowBlur: 10,
            shadowColor: "#333",
          },
          rippleAnimation: {
            brushType: "stroke",
          },
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
#map-container {
  width: 100px;
  height: 100px;
}
</style>
