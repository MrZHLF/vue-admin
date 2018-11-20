<template>
	<div class="list">
		<div class="tab">
			<el-table
				:data="tableData"
				border
				style="width: 100%">
				<el-table-column
					type="index"
					label="序号"
					align='center'
					sortable
					width="70">
				</el-table-column>
				<el-table-column
					label="昵称"
					align='center'
					width="120">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.nickname }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="投资年限"
					align='center'
					width="80">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.touziyear }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="邮箱"
					align='center'
					width="200">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.email }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="修改时间"
					align='center'
					width="180">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.modifyTime | moment }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="基本短信服务"
					align='center'>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.baseType }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="可选短信服务"
					align='center'>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.changeType }}</span>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="page">
			<el-pagination
			  @size-change="handleSizeChange"
			  @current-change="handleCurrentChange"
			  :current-page="paginations.page_index"
			  :page-sizes="paginations.page_sizes"
			  :page-size="paginations.page_size"
			  :layout="paginations.layout"
			  :total="paginations.total">
			</el-pagination>
		</div>
	</div>
</template>
<script>
	export default {
		name:"list",
		data() {
			return {
				tableData:[], //数据
				paginations:{
					page_index:1, //当前页
					total:0, //总数
					page_size:5, //一页显示多少
					page_sizes:[5,10,15,20], //每页显示多少条
					layout:'total, sizes, prev, pager, next, jumper'
				},
				allTableData:[]
			}
		},
		methods: {
			getInfoList() {
				this.$axios.get('https://www.easy-mock.com/mock/5bee2bf96b3691268016a10f/getInfoList').then(res => {
					if (res.data.status === 1){
						const data = res.data.data;
						// this.tableData = data;
						this.allTableData = data;
						// console.log(this.tableData)
						this.setPaginations()
					}
				})
			},
			setPaginations(){
				this.paginations.total = this.allTableData.length; //数据的数量
				this.paginations.page_index = 1; //默认显示第一页
				this.paginations.page_size = 5; //每页显示多少数据
				
				//显示数据
				this.tableData = this.allTableData.filter((item,index) => {
					return index < this.paginations.page_size;
				})
			},
			handleSizeChange(page_size) {
				this.paginations.page_index = 1; //第一页
				this.paginations.page_size = page_size; //每页先显示多少数据
				this.tableData = this.allTableData.filter((item,index) => {
					return index < page_size
				})
			},
			handleCurrentChange(page){
				// 跳转页数
				//获取当前页
				let index = this.paginations.page_size * (page -1);
				//获取总数
				let allData = this.paginations.page_size * page;
				
				let tablist=[];
				for(let i = index;i<allData;i++) {
					if (this.allTableData[i]) {
						tablist.push(this.allTableData[i])
					}
					this.tableData = tablist
				}
			}
		},
		created(){
			this.getInfoList()
		}
	}
</script>

<style scoped>
	.list {
		margin: 20px;
	}
	.page {
		float: right;
		margin-top: 20px;
	}
</style>