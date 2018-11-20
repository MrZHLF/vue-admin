<template>
  <div class="dialong">
	<el-dialog
		:title="dialog.title"
		type="primary"
		size="small"
		:close-on-press-escape = "false"
		:modal-append-to-body = "false"
		:close-on-click-modal = "false"
		:visible.sync="dialog.show">
		<el-form :model="formDate" ref="formdoalog" :rules="formdialog" label-width="100px">
			<el-form-item label="收支类型">
				<el-select v-model="formDate.type" placeholder="请选择活动区域">
					<el-option v-for="(format,index) in format_type_list"
					 :key="index"
					  :label="format"
					  :value="format">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="收支描述" prop="describe">
				<el-input type="text" v-model="formDate.describe"></el-input>
			</el-form-item>
			<el-form-item label="收入" prop="income">
				<el-input type="text" v-model="formDate.income"></el-input>
			</el-form-item>
			<el-form-item label="支出" prop="expend">
				<el-input type="text" v-model="formDate.expend"></el-input>
			</el-form-item>
			<el-form-item label="账户现金" prop="cash">
				<el-input type="text" v-model="formDate.cash"></el-input>
			</el-form-item>
			<el-form-item label="备注" prop="remark">
				<el-input type="textarea" v-model="formDate.remark"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button  @click="dialog.show = false">取消</el-button>
				<el-button type="primary"  @click="dialongAdd('formdoalog')">提交</el-button>
			</el-form-item>
		</el-form>
	</el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Dialong",
  props: {
    dialog: Object,
    formDate: Object
  },
  data() {
    return {
      format_type_list: [
        "提现",
        "提现手续费",
        "充值",
        "优惠券",
        "充值礼券",
        "转账"
      ],
      formdialog: {
        income: [{ required: true, message: "收入不能为空", trigger: "blur" }],
        expend: [{ required: true, message: "支出不能为空", trigger: "blur" }],
        cash: [{ required: true, message: "账户现金不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    dialongAdd(formdoalog) {
      this.$refs[formdoalog].validate(valid => {
        if (valid) {
          // console.log(this.formDate)
          const url =
            this.dialog.option == "add" ? "add" : `edit/${this.formDate.id}`;
          this.$axios.post(`/api/profiles/${url}`, this.formDate).then(res => {
            this.$message({
              message: "添加信息成功",
              type: "success"
            });
            this.dialog.show = false;
            // 更新数据
            this.$emit("update"); //传递父组件,进行视图更新
            //情况内容
            this.formDate = "";
          });
        }
      });
    }
  }
};
</script>
<style scoped>
</style>
