<template>
  <div class="infoshow">
    <el-row type='flex' class="row-bg" justify="center">
        <el-col :span="8">
            <div class="user">
                <img :src="users.avatar" alt="" class="avatar">
            </div>
        </el-col>
        <el-col :sapn="16">
            <div class="userinfo">
                <div class="user-item">
                    <i class="el-icon-service"></i>
                    <span>{{users.name}}</span>
                </div>
                <div class="user-item">
                    <i class="el-icon-setting"></i>
                    <span>{{users.identity == 'manager' ? '管理员' : '普通员工'}}</span>
                </div>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'infoshow',
    computed:{
        users() {
          return this.$store.getters.user
        }
    },
}
</script>
<style scoped>
.infoshow {
    width: 90%;
    height: 100%;
    box-sizing: border-box;
    float: right
}
.row-bg {
    width: 100%;
    height: 100%;
}
.user{
   text-align: center;
   position: relative;
   top: 30%; 
}
.user .avatar{
    width: 150px;
    border-radius: 50%;
}
.userinfo {
    width: 100%;
    height: 100%;
    background: #eeeeee;
}
.user-item {
    position: relative;
    top: 30%;
    padding: 26px;
    font-size: 30px;
    color: #333;
}
.user-item span {
    padding-left: 10px;
}
</style>
