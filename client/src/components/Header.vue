<template>
  <header class="header-nav">
      <el-row>
          <el-col :span="6" class='logo-container'>
              <!-- <img src="./../assets/logo.png" alt="" class="logo"> -->
							<!-- 折叠按钮 -->
							<div class="collapse-btn" @click="collapseChage">
									<i class="el-icon-menu icon-btn"></i>
							</div>
              <span class="title">后台管理系统</span>
          </el-col>
          <el-col :span="6" class="user">
					 
            <div class="userinfo">
							<!-- 全屏显示 -->
							<div class="btn-fullscreen" @click="handleFullScreen">
									<el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
										<i class="el-icon-rank"></i>
									</el-tooltip>
							</div>
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
	import bus from '../common/bus'
// @ is an alias to /src
export default {
  name: 'header-nav',
	data() {
		return {
			collapse: false, //菜单栏是否闭合
			fullscreen:false
		}
	},
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
    },
		collapseChage() {
			//点击隐藏左侧菜单栏，
			this.collapse = !this.collapse;
			//非父子组件传值
      bus.$emit('collapse', this.collapse);
		},
		handleFullScreen() {
			//获取到整个html
			let element = document.documentElement;
			// console.log(element)
			if(this.fullscreen) {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			} else{
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.webkitRequestFullScreen) {
					element.webkitRequestFullScreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.msRequestFullscreen) {
					// IE11
					element.msRequestFullscreen();
				}
			}
			this.fullscreen = !this.fullscreen;
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
.collapse-btn{
	width: 50px;
	margin-left: 20px;
	display: inline-block;
}
.icon-btn {
	font-size: 36px;
	vertical-align: middle;
	cursor: pointer;
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
.btn-fullscreen {
	display: inline-block;
	font-size: 24px;
  vertical-align: middle;
	margin-right: 20px;
	transform: rotate(45deg);
	cursor: pointer;
}
.userinfo{
	display: inline-block;
}
</style>
