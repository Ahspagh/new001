<template>
  <div>
    <h3>这是Account的注册子组件</h3>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="11">
        <el-input
          v-model="User.username"
          placeholder="请输入账户名"
          maxlength="12"
          show-word-limit
        >
          <template slot="prepend">
            <i class="el-icon-user"></i>帐号：
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col :span="11">
        <el-input
          v-model="User.password"
          placeholder="请输入密码"
          type="password"
          show-password
          @keyup.enter.native="doregister()"
        >
          <template slot="prepend">
            <i class="el-icon-key"></i>密码：
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-col :span="11">
        <el-button class="accountbtn" type="primary" @click="doregister()"
          >注册</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      User: {
        username: "",
        password: ""
      },
      HttpSession: {}
    };
  },
  methods: {
    doRegister() {
      if (this.userName == "") {
        this.$message({
          showClose: true,
          message: "用户名不能为空！",
          type: "warning"
        });
        return false;
      }
      if (this.password == "") {
        this.$message({
          showClose: true,
          message: "密码不能为空！",
          type: "warning"
        });
        return false;
      }
      this.axios
        .post("/user/register", JSON.stringify(this.User))
        .then(result => {
          console.log(result);
          if (result.status == 200) {
            this.$store.commit("setToken", result.data);
            localStorage.userName = this.userInfo.userName;
            localStorage.token_expire = result.data.expire;
            localStorage.token = result.data.token;
            this.$notify({
              title: "提示信息",
              message: "登录成功",
              type: "success"
            });
            this.$router.push({ path: "/" });
          } else {
            this.$notify({
              title: "提示信息",
              message: "账号或密码错误!!!",
              type: "error"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
div h3 {
  color: blue;
}
.accountbtn {
  width: 100%;
  font-size: 16px;
}
</style>
