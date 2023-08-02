<template>
  <v-chart
    :option="option"
    style="width: 100%; height: 100%; position: relative"
  />
</template>

<script>
import "echarts/extension/bmap/bmap";
import { data, geoCoordMap } from "@/mock/chart";
export default {
  name: "BMapScatter",
  data() {
    return {
      option: {},
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
    this.getCoordMapList();
    console.log(this.coordMapList);
    this.option = {
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
          enable: {
            value: 2,
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
          itemStyle: {
            color: "purple",
          },
          symbolSize: function (val) {
            return val[2] / 10;
          },
        },
        {
          name: "top5",
          type: "effectScatter",
          coordinateSystem: "bmap",
          data: this.top5List,
          encode: {
            value: 2,
          },
          symbolSize: function (val) {
            return val[2] / 10;
          },
          itemStyle: {
            color: "purple",
            shadowBlur: 10,
            shadowColor: "#333",
          },
          label: {
            show: true,
            position: "right",
            formatter: function (val) {
              return `${val.data.name}-${val.data.value[2]}`;
            },
          },
          hoverAnimation: true,
          rippleEffect: {
            brushType: "stroke",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
