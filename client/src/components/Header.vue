<template>
  <header class="header-nav">
      <el-row>
          <el-col :span="6" class='logo-container'>
              <img src="./../assets/logo.png" alt="" class="logo">
              <span class="title">后台管理系统</span>
          </el-col>
          <el-col :span="6" class="user">
            <div class="userinfo">
                <img  class="avatar" :src="users.avatar">
                <div class="welcome">
                    <p class="name comename">欢迎</p>
                    <p class="name avatarname">{{users.name}}</p>   
                </div>
                <span class='username'>
                    <el-dropdown
                            trigger="click"
                            @command='setDialogInfo'>
                        <span class="el-dropdown-link">
                            <i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command='info'>个人信息</el-dropdown-item>
                            <el-dropdown-item  command='logout'>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </div>
          </el-col>
      </el-row>
  </header>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'header-nav',
  computed:{
      users() {  //通过vuex获取用户信息
        return this.$store.getters.user
      }
  },
  methods:{
    setDialogInfo(cmditem){
        switch (cmditem) {
            case 'info':
                this.showInfoList()
                break;
            case 'logout':
                this.logout()
                break;
        }
    },
    showInfoList() {
        // console.log('下来菜单')
        this.$router.push('/Infoshow')
    },
    logout(){
        // console.log('退出')
        //清除token
        localStorage.removeItem('eleToken');
        //清除vuex
        this.$store.dispatch('createUser')
        //路由跳转
        this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.header-nav {
  width: 100%;
  height: 60px;
  background: #324057;
  color: #fff;
  border-bottom: 1px solid #1f2d3d;
  overflow: hidden;
  padding: 5px 0;
}
.logo-container {
  line-height: 60px;
  min-width: 400px;
  padding: 0 5px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.title {
  vertical-align: middle;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  letter-spacing: 3px;
}
.user {
  line-height: 60px;
  text-align: right;
  float: right;
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}
.name {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.comename {
  font-size: 12px;
}
.avatarname {
  color: #409eff;
  font-weight: bolder;
}
.username {
  cursor: pointer;
  margin-right: 5px;
}
.el-dropdown {
  color: #fff;
}
</style>
