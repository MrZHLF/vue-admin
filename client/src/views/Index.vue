<template>
  <div class="index">
      <Header></Header>
      <LeftMenu></LeftMenu>
      <div class="rightContainer">
        <router-view></router-view>
      </div>
      
  </div>
</template>

<script>
import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'
// @ is an alias to /src
export default {
  name: 'Index',
  components:{
    Header,
    LeftMenu
  }
}
</script>
<style>
.index{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>
