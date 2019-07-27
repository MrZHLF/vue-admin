<template>
	<div class="touzilist">
		<div class="excel_container">
			<el-button type="primary" icon='document' @click='exportToExcel()'>导出excel</el-button>
		</div>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" label="序号" align='center' width="70">
			</el-table-column>
			<el-table-column label="省份" align="center" width="180">
				<template slot-scope="scope">
					<span>{{ scope.row.provinces}}</span>
				</template>
			</el-table-column>
			<el-table-column label="投资金额" align="center" width="180">
				<template slot-scope="scope">
					<span style="color:rgb(204, 0, 51)">{{ scope.row.orderMoney}}</span>
				</template>
			</el-table-column>
			<el-table-column label="收益金额" align="center" width="180">
				<template slot-scope="scope">
					<span style="color:rgb(0, 208, 83)">{{'+' + scope.row.incomeMoney}}</span>
				</template>
			</el-table-column>
			<el-table-column label="主要投资项目" align="center" width="180">
				<template slot-scope="scope">
					<span>
						<el-tag size="medium">{{ scope.row.payType}}</el-tag>
					</span>
				</template>
			</el-table-column>
			<el-table-column label="投资周期" align="center" width="180">
				<template slot-scope="scope">
					<span>{{ scope.row.orderPeriod}}</span>
				</template>
			</el-table-column>
			<el-table-column label="投资人数" align="center" width="180">
				<template slot-scope="scope">
					<span>{{ scope.row.orderPersonConunt}}</span>
				</template>
			</el-table-column>
			<el-table-column label="投资年变化率" align="center" width="180">
				<template slot-scope="scope">
					<span>{{ scope.row.orderYearRate}}</span>
				</template>
			</el-table-column>
			<el-table-column label="备注" align="center" width="180">
				<template slot-scope="scope">
					<span>{{ scope.row.remarks}}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: []
			};
		},
		methods: {
			getTabsList() {
				this.$axios
					.get(
						"https://www.easy-mock.com/mock/5bee2bf96b3691268016a10f/getChinaTouziList"
					)
					.then(res => {
						//			console.log(res)
						const data = res.data;
						this.tableData = data.data;
						//   console.log(this.tableData)
					})
			},
			exportToExcel() {
				//excel数据导出
				require.ensure([], () => {
					const {
						export_json_to_excel
					} = require('../../assets/js/Export2Excel');
					const tHeader = ['序号', '省份', '投资总额', '收益总额', '主要投资项目', '投资周期', '投资人数', '投资年变化率', '备注'];
					const filterVal = ['index', 'provinces', 'orderMoney', 'incomeMoney', 'payType', 'orderPeriod',
						'orderPersonConunt', 'orderYearRate', 'remarks'
					];
					const list = this.tableData;
					const data = this.formatJson(filterVal, list);
					export_json_to_excel(tHeader, data, '列表excel');
				})
			},
			formatJson(filterVal, jsonData) {
				return jsonData.map(v => filterVal.map(j => v[j]))
			},
			handleDelete(row,index) {
				//删除数据
				this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					this.$axios.delete(`https://www.easy-mock.com/mock/5bee2bf96b3691268016a10f/getChinaTouziList/${row._id}`).then(res => {
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
						
						console.log(res)
					})
					/* this.getTabsList.forEach((item,index) => {
						console.log(item,index)
					}) */
          // this.getTabsList();
        }).catch((error) => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
					console.log(error)
        });
			}
		},
		mounted() {
			this.getTabsList();
		}
	};
</script>

<style scoped>
	.touzilist {
		margin: 20px;
	}
</style>
