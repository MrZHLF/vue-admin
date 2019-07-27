<template>
  <div class="home-top">
    <div class="home-wrapper">
		<el-row :gutter="20">
		  <el-col :span="3">
			  <div class="grid-content bg-purple pay">
				<p class="list_number">+208.65</p>
				<p>盈亏(千万)</p>
			  </div>
		  </el-col>
		  <el-col :span="3">
		  	<div class="grid-content bg-purple income">
		  	<p class="list_number">+12.37</p>
		  	<p>收益率(%)</p>
		  	</div>
		  </el-col>
		  <el-col :span="3">
		  	<div class="grid-content bg-purple hidden_investors">
		  	<p class="list_number">686</p>
		  	<p>潜在投资人(人)</p>
		  	</div>
		  </el-col>
		  <el-col :span="3">
		  	<div class="grid-content bg-purple intention_investors">
		  	<p class="list_number">264</p>
		  	<p>意向投资人(人)</p>
		  	</div>
		  </el-col>
		  <el-col :span="3">
		  	<div class="grid-content bg-purple waitpending_investors">
		  	<p class="list_number">137</p>
		  	<p>待审投资人(人)</p>
		  	</div>
		  </el-col>
		  <el-col :span="3">
		  	<div class="grid-content bg-purple pending_investors">
		  	<p class="list_number">100</p>
		  	<p>审核中投资人(人)</p>
		  	</div>
		  </el-col>
		  <el-col :span="3">
		  	<div class="grid-content bg-purple pass_investors">
		  	<p class="list_number">86</p>
		  	<p>审核通过投资人(人)</p>
		  	</div>
		  </el-col>
		  <el-col :span="3">
		  	<div class="grid-content bg-purple pay">
		  	<p class="list_number">36</p>
		  	<p>新增投资人(人)</p>
		  	</div>
		  </el-col>
		</el-row>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Nofind',
}
</script>
<style scoped>
  .home-top {
	width: 100%;
	height: 100%;
	overflow: hidden;
  }
  .home-wrapper {
	padding:15px;
  }
  .grid-content {
    min-height: 36px;
	text-align: center;
    font-size: 14px;
    border-radius: 6px;
    padding: 15px 0;
    color: #fff;
  }
  .list_number{
	font-size: 16px;
	font-weight: 700;
	padding-bottom: 5px;
  }
  .pay {
	background: #18a689;
  }
  .income{
	background-color: #9c0;
  }
  .hidden_investors{
	background-color: #3c9;
  }
  .intention_investors  {
	background-color: #3b5999;
  }
  .waitpending_investors {
	background-color: #6c9;
  }
  .pending_investors{
	background-color: #099;
  }
  .pass_investors {
	background-color: #f90;
  }
  .newadd_investors {
	background-color: #09c;
  }
</style>
