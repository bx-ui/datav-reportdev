<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "./TotalSales.vue";
import TotalOrders from "./TotalOrders.vue";
import TodayUsers from "./TodayUsers.vue";
import TotalUsers from "./TotalUsers.vue";
export default {
  components: { TotalSales, TotalOrders, TodayUsers, TotalUsers },
};
</script>

<style lang="scss" scoped></style>
