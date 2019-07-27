<template>
  <div class="index">
    <Header></Header>
    <LeftMenu></LeftMenu>
    <div class="rightContainer" :class="{'content-collapse':collapse}">
      <Tags/>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import bus from "../common/bus";
import Tags from "../common/Tags";
// import moment from 'moment'
// @ is an alias to /src
export default {
  name: "Index",
  data() {
    return {
      tagsList: [],
      collapse: false
    };
  },
  components: {
    Header,
    LeftMenu,
    Tags
  },
  created() {
    //内容区域跟随变化
    bus.$on("collapse", msg => {
      console.log(msg);
      this.collapse = msg;
    }),
      // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
      bus.$on("tags", msg => {
        let arr = [];
        for (let i = 0, len = msg.length; i < len; i++) {
          msg[i].name && arr.push(msg[i].name);
        }
        this.tagsList = arr;
        // console.log(tags)
      });
  }
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
.rightContainer.content-collapse {
  left: 48px;
}
.rightContainer {
  position: absolute;
  left: 180px;
  right: 0;
  top: 72px;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 30px;
  transition: left 0.3s ease-in-out;
}
</style>
