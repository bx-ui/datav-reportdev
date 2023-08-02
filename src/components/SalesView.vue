<template>
  <div class="sales-container">
    <el-card>
      <template #header>
        <div class="sales-header">
          <div>
            <el-menu :default-active="activeIndex" mode="horizontal">
              <el-menu-item index="0">
                <div class="item">销售额</div>
              </el-menu-item>
              <el-menu-item index="1">
                <div class="item">访问量</div>
              </el-menu-item>
            </el-menu>
          </div>
          <div>
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="1">今日</el-radio-button>
              <el-radio-button label="2">本周</el-radio-button>
              <el-radio-button label="3">本月</el-radio-button>
              <el-radio-button label="4">今年</el-radio-button>
            </el-radio-group>
            <el-date-picker
              v-model="dates"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              size="small"
              style="margin-left: 10px"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <template #default>
        <div style="display: flex">
          <div id="sales-chart" />
          <ul class="leaderboard">
            <li v-for="(item, index) in mockLeaderboard" :key="item.id">
              <div style="display: flex; align-items: center">
                <div v-if="index <= 2" class="circle">{{ index + 1 }}</div>
                <div v-else style="margin-right: 4px">{{ index + 1 }}</div>
                {{ item.name }}
              </div>
              <div>{{ item.num }}</div>
            </li>
          </ul>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
const mockLeaderboard = [
  {
    id: 0,
    name: "肯德基",
    num: "200000",
  },
  {
    id: 1,
    name: "麦当劳",
    num: "200000",
  },
  {
    id: 2,
    name: "肯德基",
    num: "200000",
  },
  {
    id: 3,
    name: "海底捞",
    num: "200000",
  },
  {
    id: 4,
    name: "兰州拉面",
    num: "200000",
  },
  {
    id: 5,
    name: "汉堡王",
    num: "200000",
  },
  {
    id: 6,
    name: "真功夫",
    num: "200000",
  },
];
export default {
  data() {
    return {
      activeIndex: "0",
      radioSelect: "1",
      dates: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      mockLeaderboard: mockLeaderboard,
    };
  },
  mounted() {
    const chartDom = document.getElementById("sales-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      title: {
        text: "年度销售额",
        left: 0,
        top: 0,
        textStyle: {
          color: "#666",
          fontSize: 12,
        },
      },
      xAxis: {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "1月",
          "11月",
          "12月",
        ],
        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: "#999",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#999",
          },
        },
        axisLabel: {
          color: "#333",
        },
      },
      yAxis: {
        type: "value",
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: "dotted",
            color: "#eee",
          },
        },
      },
      series: [
        {
          type: "bar",
          barWidth: "35%",
          data: [164, 175, 500, 158, 164, 175, 135, 400, 164, 175, 450, 158],
          color: "#3398DB",
        },
      ],
      grid: {
        top: 40,
        left: 60,
        bottom: 30,
        right: 30,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.sales-container {
  margin-top: 20px;
  .sales-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item {
      width: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  #sales-chart {
    flex: 1;
  }
  .leaderboard {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 300px;
    li {
      font-size: 12px;
      display: flex;
      align-items: center;
      padding: 9px 0px;
      justify-content: space-between;
      .circle {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #222;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-right: 4px;
      }
    }
  }
}

::v-deep .el-card__header {
  padding: 0px 20px;
}
</style>
