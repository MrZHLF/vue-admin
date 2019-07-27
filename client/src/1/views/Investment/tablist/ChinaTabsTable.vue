<template>
	<div class="touzilist">
		<el-table
			:data="getUserInfo"
			:default-sort = "{prop: 'data', order: 'descending'}"
			tooltip-effect="dark"
			style="width: 100%">
			<el-table-column
				type="index"
				label="序号"
				align='center'
				sortable
				width="70">
			</el-table-column>
			<el-table-column
				label="省份"
				align="center"
				width="180">
				<template slot-scope="scope">
				<span>{{ scope.row.provinces}}</span>
				</template>
			</el-table-column>
			<el-table-column
				label="投资金额"
				align="center"
				sortable
				width="180">
				<template slot-scope="scope">
				<span style="color:rgb(204, 0, 51)">{{ scope.row.orderMoney}}</span>
				</template>
			</el-table-column>
			<el-table-column
				label="收益金额"
				align="center"
				sortable
				width="180">
				<template slot-scope="scope">
				<span style="color:rgb(0, 208, 83)">{{'+' + scope.row.incomeMoney}}</span>
				</template>
			</el-table-column>
			<el-table-column
				label="主要投资项目"
				align="center"
				width="180">
				<template slot-scope="scope">
					<span>
						<el-tag size="medium">{{ scope.row.payType}}</el-tag>
					</span>
				</template>
			</el-table-column>
			<el-table-column
				label="投资周期"
				align="center"
				sortable
				width="180">
				<template slot-scope="scope">
				<span>{{ scope.row.orderPeriod}}</span>
				</template>
			</el-table-column>
			<el-table-column
				label="投资人数"
				align="center"
				sortable
				width="180">
				<template slot-scope="scope">
				<span>{{ scope.row.orderPersonConunt}}</span>
				</template>
			</el-table-column>
			<el-table-column
				label="投资年变化率"
				align="center"
				width="180">
				<template slot-scope="scope">
				<span>{{ scope.row.orderYearRate}}</span>
				</template>
			</el-table-column>
			<el-table-column
				label="备注"
				align="center"
				width="180">
				<template slot-scope="scope">
				<span>{{ scope.row.remarks}}</span>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name:'chinatabstable',
	props:{
		getUserInfo:Array
	},
  data () {
		return {
				
		}
	}
};
</script>

<style scoped>
</style>
