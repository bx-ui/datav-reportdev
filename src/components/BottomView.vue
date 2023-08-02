<template>
  <el-row :gutter="20" style="margin-top: 20px">
    <el-col :span="12">
      <el-card shadow="hover" class="keyword-search-container">
        <template #header>
          <span class="card-title">关键词搜索</span>
        </template>
        <template #default>
          <!-- 图表 -->
          <div class="chart">
            <div class="chart-item">
              <span class="title">搜索用户数</span>
              <span class="num">93,634</span>
              <div id="keyword-user-chart-user" />
            </div>
            <div class="chart-item">
              <span class="title">搜索量</span>
              <span class="num">198,782</span>
              <div id="keyword-user-chart-num" />
            </div>
          </div>
          <!-- 表格 -->
          <div style="margin-top: 20px">
            <el-table :data="tableData">
              <el-table-column label="排名" prop="level" />
              <el-table-column label="关键词" prop="keyword" />
              <el-table-column label="总搜索量" prop="total" />
              <el-table-column label="搜索用户数" prop="searchUsers" />
            </el-table>
          </div>
          <!-- 分页器 -->
          <div
            style="margin-top: 20px; display: flex; justify-content: flex-end"
          >
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </template>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="hover" class="category-container">
        <template #header>
          <div class="header">
            <span class="card-title">分类销售排行</span>
            <el-radio-group v-model="radioValue" size="small">
              <el-radio-button :label="0">品类</el-radio-button>
              <el-radio-button :label="1">商品</el-radio-button>
            </el-radio-group>
          </div>
        </template>
        <template #default>
          <div id="category-chart" />
        </template>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
const tableData = [
  {
    level: 1,
    keyword: "北京",
    total: 100,
    searchUsers: 90,
  },
  {
    level: 2,
    keyword: "北京",
    total: 100,
    searchUsers: 90,
  },
  {
    level: 3,
    keyword: "北京",
    total: 100,
    searchUsers: 90,
  },
  {
    level: 4,
    keyword: "北京",
    total: 100,
    searchUsers: 90,
  },
];

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
  data() {
    return {
      tableData: tableData,
      radioValue: 0,
    };
  },
  methods: {
    generateKeyword() {
      const chartDom = document.getElementById("keyword-user-chart-user");
      const chart = this.$echarts.init(chartDom);
      chart.setOption({
        xAxis: {
          show: false,
          type: "category",
          boundaryGap: false,
        },
        yAxis: {
          show: false,
          type: "value",
        },
        series: [
          {
            type: "line",
            data: [
              300, 296, 222, 234, 254, 70, 50, 129, 77, 163, 303, 202, 206, 128,
            ],
            itemStyle: {
              opacity: 0,
            },
            smooth: true,
            areaStyle: {
              color: "rgba(95,187,255,.5)",
            },
            lineStyle: {
              color: "rgba(95,187,255)",
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
    generateLeywordNum() {
      const chartDom = document.getElementById("keyword-user-chart-num");
      const chart = this.$echarts.init(chartDom);
      chart.setOption({
        xAxis: {
          show: false,
          type: "category",
          boundaryGap: false,
        },
        yAxis: {
          show: false,
          type: "value",
        },
        series: [
          {
            type: "line",
            data: [
              300, 296, 222, 234, 254, 70, 50, 129, 77, 163, 303, 202, 206, 128,
            ],
            itemStyle: {
              opacity: 0,
              color: "rgba(95, 187, 255)",
            },
            smooth: true,
            areaStyle: {
              color: "rgba(95, 187, 255, .5)",
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
    generateCategory() {
      const chartDom = document.getElementById("category-chart");
      const chart = this.$echarts.init(chartDom);
      chart.setOption({
        title: [
          {
            text: "品类分布",
            textStyle: {
              fontSize: 16,
              color: "#000",
            },
            top: 20,
            left: 20,
          },
          {
            text: "累计订单量",
            subtext: 390,
            textStyle: {
              fontSize: 18,
              color: "#666",
            },
            subtextStyle: {
              fontSize: 36,
              color: "#000",
            },
            textAlign: "center",
            x: "30%",
            y: "42%",
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
                formatter(params) {
                  return params.data.legendname;
                },
              },
            },
            labelLine: {
              normal: {
                show: true,
                length: 5,
                length2: 3,
                smooth: true,
              },
            },
            center: ["30%", "50%"],
            radius: ["55%", "70%"],
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
          left: "65%",
          top: "middle",
          textStyle: {
            color: "#888",
          },
        },
        tooltip: {},
      });
    },
  },
  mounted() {
    this.generateKeyword();
    this.generateLeywordNum();
    this.generateCategory();
  },
};
</script>

<style lang="scss" scoped>
.card-title {
  font-weight: 800;
}

#keyword-user-chart-user,
#keyword-user-chart-num {
  height: 60px;
}

.keyword-search-container {
  .chart {
    display: flex;
    justify-content: space-between;
    .chart-item {
      width: 45%;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 20px;
        color: #999;
      }
      .num {
        font-weight: 900;
        font-size: 34px;
        letter-spacing: 2px;
      }
    }
  }
}

.category-container {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #category-chart {
    height: 438px;
  }
}
</style>
