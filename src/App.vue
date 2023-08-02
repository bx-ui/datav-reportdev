<template>
  <div class="app-container">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from "./components/TopView.vue";
import SalesView from "./components/SalesView.vue";
import BottomView from "./components/BottomView.vue";
import MapView from "./components/MapView.vue";
export default {
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },
};
</script>

<style lang="scss">
html,
body,
#app {
  padding: 0;
  margin: 0;
  background-color: #eee;
}

.app-container {
  padding: 20px;
  box-sizing: border-box;
}
</style>
