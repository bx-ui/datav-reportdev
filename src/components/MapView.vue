<template>
  <el-row :gutter="20" style="margin-top: 20px">
    <el-col :span="18">
      <div class="map">
        <BMapScatter />
      </div>
    </el-col>
    <el-col :span="6">
      <!-- 用户月同比增长 -->
      <div class="user-async">
        <el-card style="height: 100%">
          <template #header>
            <span>用户月同比增长</span>
            <v-chart :option="liquidOption" style="height: 240px" />
          </template>
        </el-card>
      </div>
      <!-- 热门搜索 -->
      <div class="hot-search">
        <el-card style="height: 100%">
          <template #header>
            <span>热门搜索</span>
          </template>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import BMapScatter from "./BMapScatter.vue";
import "echarts-liquidfill";
export default {
  components: {
    BMapScatter,
  },
  data() {
    return {
      liquidOption: {},
    };
  },
  mounted() {
    this.liquidOption = {
      series: [
        {
          type: "liquidFill",
          data: [0.6],
          outline: {
            show: false,
          },
          center: ["50%", "50%"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.map {
  height: 600px;
}

.user-async {
  height: 290px;
  margin-bottom: 20px;
}

.hot-search {
  height: 290px;
}
</style>
