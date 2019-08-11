<template>
  <div>
    <el-avatar :size="100">user_img</el-avatar>
    <span avat></span>
    <h3>这是Account的登录子组件</h3>

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
          @keyup.enter.native="doLogin()"
        >
          <template slot="prepend">
            <i class="el-icon-key"></i>密码：
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-col :span="11">
        <el-button class="accountbtn" type="primary" @click.native="doLogin"
          >登录</el-button
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
        password: "",
        status: 1
      },
      HttpSession: {
        token_expire: null,
        token: null
      }
    };
  },
  methods: {
    doLogin() {
      if (this.User.username == "") {
        this.$message({
          showClose: true,
          message: "用户名不能为空！",
          type: "warning"
        });
        return false;
      }
      if (this.User.password == "") {
        this.$message({
          showClose: true,
          message: "密码不能为空！",
          type: "warning"
        });
        return false;
      }
      this.axios
        // .post("index/login", JSON.stringify(this.User))
        .post("index/login", this.User)
        .then(result => {
          console.log(result);
          if (result.data.flag) {
            this.$store.commit("SET_TOKEN", result.data.message);
            this.$store.commit("GET_USER", result.data.username);
            localStorage.userName = this.User.username;
            localStorage.token_expire = result.data.expire;
            localStorage.token = result.data.token;
            // this.HttpSession.userName = this.User.username;
            // this.HttpSession.token_expire = result.data.expire;
            // this.HttpSession.token = result.data.token;
            this.$notify({
              title: "提示信息",
              message: "登录成功",
              type: "success"
            });
            this.$router.push({ path: "/company/company-1" });
          } else {
            this.$notify({
              title: "提示信息",
              message: "账号或密码错误！！！",
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
div.el-input-group {
  box-shadow: 0px 0.7px 7px #97979797;
  border-radius: 4px;
}
</style>
