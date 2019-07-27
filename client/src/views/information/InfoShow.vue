<template>
  <div class="infoshow">
    <div class="users">
        <el-row>
            <el-col :span="8">
                <div class="box-card">
                    <div class="el-card mgb20 is-hover-shadow" style="height: 252px">
                        <div class="user-info">
                            <img :src="users.avatar" alt="" class="avatar">
                            <div class="user-info-cont">
                                <span class="user-name">{{users.name}}</span>
                                <span>{{users.identity == 'manager' ? '管理员' : '普通员工'}}</span>
                            </div>
                        </div>
                        <div class="user-info-list">
                            <span>登录地址:</span>
                            <span class="address">郑州</span>
                        </div>
                    </div>
                </div>
                <!-- 语言描述 -->
                <div class="box-card" style="margin-top: 20px">
                    <div class="el-card is-hover-shadow" style="height: 252px">
                        <div class="el-card__header">
                            <span>语言描述</span>
                        </div>
                        <div class="el-card__body">
                            <div class="card-body-list">
                                <div class="title">JavaScript:</div>
                                <div class="progress"><el-progress :percentage="70"></el-progress></div>
                            </div>
                            <div class="card-body-list">
                                <div class="title">Html:</div>
                                <el-progress class="progress" :percentage="80" color="#8e71c7"></el-progress>
                            </div>
                            <div class="card-body-list">
                                <div class="title">Css:</div>
                                <el-progress class="progress" :percentage="80" color="#8e71c7"></el-progress>
                            </div>
                            <div class="card-body-list">
                                <div class="title">Vue:</div>
                                <el-progress class="progress" :percentage="60" color="#67c23a"></el-progress>
                            </div>
                            <div class="card-body-list">
                                <div class="title">Node.js:</div>
                                <el-progress class="progress" :percentage="20" color="#f56c6c"></el-progress>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-view grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2 grid-con-1">
                                <i class="el-icon-message grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <!-- 2019年 -->
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>2019年目标</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                  </div>
                  <el-table
                    :data="todoList"
                  >
                    <el-table-column width="40">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.status"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
                        </template>
                    </el-table-column> 
                  </el-table>
                </el-card>
                <!-- 日历 -->
                <div class="box-card" style="margin-top: 20px">
                    <div class="el-card is-hover-shadow" style="height: 400px">
                        <div class="el-card__header">
                            <span>时钟</span>
                        </div>
                        <div class="el-card__body">
                            <Clock/>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import Clock from './Clock'
// @ is an alias to /src
export default {
  name: 'infoshow',
    data(){
        return {
            todoList:[
                {
                    status:true,
                    title:"学会Vue"
                },
                {
                    status:false,
                    title:"2019要学会React"
                }
            ]
        }
    },
    computed:{
        users() {
          return this.$store.getters.user;
        }
    },
    components: {
        Clock
    }
}
</script>
<style scoped>
    .infoshow {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        float: right;
        background: #eeeeee;
    }
    .row-bg {
        width: 100%;
        height: 100%;
    }
    .users{
        margin: 20px;
    }
    .user-info {
        display: flex;
        align-items: center;
        padding: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }
    .avatar{
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .el-card{
        margin-bottom: 20px;
    }
    .user-info-cont {
        flex: 1;
        padding-left: 50px;
    }
    .user-info-cont span {
        display: block;
    }
    .user-info-cont span:first-child{
        color: #222;
        font-size: 22px;
    }
    .user-info-cont span:last-child{
        color: #999;
        font-size: 14px;
        padding-top: 10px;
    }
    .user-info-list {
        font-size: 14px;
        line-height: 25px;
        color: #999;
        padding-left: 10px;
    }
    .address {
        margin-left: 70px;
    }
    .card-body-list {
        width: 100%;
        height: 100%;
        height: 30px;
    }
    .card-body-list .title {
        width: 20%;
        float: left
    }
    .card-body-list .progress{
        width: 80%;
        float: right;
    }
    .grid-content  {
        display: flex;
        align-items: center;
        height: 100px;
    }
    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }
    .grid-con-1 .grid-con-icon {
        background: #2d8cf0;
    }
    .grid-con-2 .grid-con-icon{
        background: #64d572;
    }
    .grid-con-3 .grid-con-icon {
        background: #f25e43;
    }
    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }
    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }
    .grid-con-1 .grid-num{
        color: #2d8cf0;
    }
    .grid-con-3 .grid-num{
        color: #f25e43;
    }
    .el-col-16 {
        width: 65%;
        margin-left: 1%;
    }
</style>
