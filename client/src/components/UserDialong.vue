<template>
  <div class="nofind">
    <el-dialog
      :title="dialong.title"
      type="primary"
      size="small"
      :close-on-press-escape="false"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :visible.sync="dialong.show"
    >
      <el-form :model="form" ref="formdoalog" :rules="formdialog" label-width="80px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-input v-model="form.state"></el-input>
        </el-form-item>
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="form.hobby"></el-input>
        </el-form-item>
        <el-form-item label="是否已婚" prop="marriage">
          <el-input v-model="form.marriage"></el-input>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <!-- <el-input v-model="form.birthday"></el-input> -->
          <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="联系地址" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialong.show = false">取 消</el-button>
        <el-button type="primary" @click="addHandle('formdoalog')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "UserDialong",
  data() {
    return {
      formdialog: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        sex: [{ required: true, message: "性别不能为空", trigger: "blur" }]
      }
    };
  },
  props: {
    dialong: Object,
    form: Object
  },
  methods: {
    addHandle(formdoalog) {
      this.$refs[formdoalog].validate(valid => {
        if (valid) {
          // console.log(this.form)
          let url =
            this.dialong.option == "add" ? "add" : `/edit/${this.form.id}`;

          this.$axios.post(`/api/staff/${url}`, this.form).then(res => {
            this.$message({
              type: "success",
              message: "数据添加成功"
            }),
              (this.dialong.show = false);
            this.$emit("UserData");
            //清空内容
            this.form = "";
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
</style>
