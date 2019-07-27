<template>
  <div class="home">
    <div class="container">
      <HomeTop></HomeTop>
      <BaseCharts/>
    </div>
  </div>
</template>

<script>
import HomeTop from "./HomeTop";
import BaseCharts from "./BaseCharts";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    HomeTop,
    BaseCharts
  }
};
</script>
<style scoped>
.home {
  width: 100%;
}
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  text-align: center;
}
.title {
  font-size: 30px;
}
.lead {
  margin-top: 20px;
  font-size: 22px;
}
</style>
