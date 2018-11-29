<template>
	<div class="lock-container pull-height">
	    <div class="lock-form animated bounceInDown">
				<p class="title">挂机中......</p>
				<span class="icon">
					<i class="iconfont icon-tuichu1" @click="$router.go(-1)"></i>
				</span>
	    </div>
	  </div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.lock-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.lock-container::before {
  z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/lockLogin.png");
  background-size: cover;
}
.lock-form {
  width: 300px;
}
.title {
	color: #fff;
	text-align: center;
	font-size: 25px;
}
span i{
	margin-top: 20px;
	font-size: 30px;
	text-align: center;
	display: block;
	color: red;
	cursor: pointer;
}
</style>
