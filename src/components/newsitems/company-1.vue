<template>
  <div>
    <!-- <h1>这是 中数通 </h1> -->
    <el-row :gutter="30">
      <el-col :span="10" :offset="7">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>中数通</span> -->
              <i>
                <img
                  style="width: 250px; height: 45.24px"
                  fit="contain"
                  src="http://www.cndatacom.com/images/CDC_Logo.png"
                />
              </i>
              <div style="float: right; padding: 3px 0; " type="text">
                <a class="link" href="http://www.cndatacom.com/" target="_blank"
                  >进入公司首页</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.id" class="text item">
                <a v-if="i.typeId === 32">{{ i.id }}. &nbsp;{{ i.title }}</a>
              </div>
            </el-scrollbar>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 0,
      num: 0,
      title: "",
      list: []
    };
  },
  created() {
    this.getAllList();
  },
  methods: {
    getAllList() {
      this.axios.get("news/getcdc").then(response => {
        let data = response.data;
        this.list = data;
        // console.log(data);
      });
    }
  }
};
</script>
<style lang="less" scope></style>
