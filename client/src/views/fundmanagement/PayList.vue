<template>
	<div class="pay-list">
		<div class="search-box">
			<el-form
				:inline="true"
				ref="search_data"
				:rules="rules"
				:model="search_data"
			>
				<el-form-item label="支付单号:">
					<el-input type="text" v-model="search_data.payNumber" placeholder="请输入支付单号"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" icon="search" @click='onScreeoutMoney("search_data")'>筛选</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="tab-contenet">
			<el-table
				:data="tableData"
				style="width: 100%">
				<el-table-column
				  type="selection"
				  width="55">
				</el-table-column>
				<el-table-column
				  label="支付单号"
					prop="payNumber"
				  align='center'
				  width="160">
				  <template slot-scope="scope">
					<span>{{ scope.row.payNumber }}</span>
				  </template>
				</el-table-column>
				<el-table-column
					label="订单金额"
					align='center'
					width="120">
					<template slot-scope="scope">
						<span style="color: rgb(0, 102, 204)">{{ scope.row.orderMoney }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="收益金额"
					align='center'
					width="120">
					<template slot-scope="scope">
						<span style="color:rgb(0, 208, 83)">+{{ scope.row.incomeMoney }}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="支付项目"
					align='center'
					:filters="fields.payType.filter.list"
					:filter-method="filterType"
					width="120">
					<template slot-scope="scope">
						<el-tag :type="payTypeTag(scope.row.payType)">
							{{ scope.row.payType }}
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column
					label="下单时间"
					align='center'
					width="210">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="color: rgb(102, 204, 255);margin-left: 10px">{{ scope.row.orderTime | moment}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="支付状态"
					align='center'
					width="120"
					>
					<template slot-scope="scope">
						<el-tag :type="payStatusTag(scope.row.payStatus)">
							{{ scope.row.payStatus === '0' ? "支付成功": ((scope.row.payStatus === '1' ? "待支付":"支付失败")) }}
						</el-tag>
					</template>
				</el-table-column>
				<el-table-column
					label="备注"
					align='center'>
					<template slot-scope="scope">
						<span>{{ scope.row.remarks }}</span>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	data() {
		return {
			tableData:[],
			fields:{
				payType:{
					filter:{
						list:[
							{text:"债券",value:"债券"},
							{text:"股票",value:"股票"},
							{text:"储蓄",value:"储蓄"},
							{text:"基金",value:"基金"},
							{text:"期货",value:"期货"}
						]
					}
				}
			},
			search_data:{
				payNumber:""
			},
			rules:{
				payNumber:[
					{required: true,message: '支付单号不能为空', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		getList() {
			this.$axios.get('https://www.easy-mock.com/mock/5bee2bf96b3691268016a10f/getPayList').then(res => {
				console.log(res)
				const data = res.data;
				if(data.status === 1) {
					this.tableData = data.data
				}
			})
		},
		filterType(value,item) {
			return item.payType = value
		},
		payTypeTag(item){
			// console.log(item)
			//支付项目
			let basic = '';
			switch(item) {
				case '债券':
					basic = 'info';
					break;
				case '股票':
					basic = 'danger';
					break;
				case '储蓄':
					basic = 'warning';
					break;
				case '基金':
					basic = 'success';
					break;
				case '期货':
					basic = 'primary';
					break;
			}
			return basic
		},
		payStatusTag(item) {
			//支付状态
			console.log(item)
			let statusTag = ''
			switch(item) {
				case '0':
					statusTag = 'success';
					this.tagvalue = '支付成功';
					break;
				case '1':
					statusTag = 'warning';
					this.tagvalue = '待成功';
					break;
				case '2':
					statusTag = 'danger';
					this.tagvalue = '支付失败';
					break;
			}
			return statusTag
			console.log(this.tagvalue)
		},
		onScreeoutMoney(){
			if(this.search_data.payNumber === '') {
				 this.$message({
          message: '支付单号不能为空',
          type: 'warning'
        });
			}
		}
	},
	created() {
		this.getList()
	}
}
</script>
<style scoped>
.tab-contenet{
	margin: 50px 30px;
}
.search-box {
	margin: 20px 0 0 20px;
}
</style>
