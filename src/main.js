import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "element-ui/lib/theme-chalk/index.css";
import VueECharts from "vue-echarts";

import * as echarts from "echarts";

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

Vue.component("v-chart", VueECharts);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
