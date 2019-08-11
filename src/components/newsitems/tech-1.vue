<template>
  <div>
    <!-- <h1>这是 科普人文 </h1> -->
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>果壳</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-guokejingxuan" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://www.guokr.com/" target="_blank"
                  >进入果壳网</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.url" class="text item">
                <a v-if="i.typeId === 7" :href="i.url" target="_blank"
                  >{{ i.id }}. &nbsp;{{ i.title }}</a
                >
              </div>
            </el-scrollbar>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>科普中国</span> -->
              <i>
                <img
                  style="width: 100px; height: 45.24px"
                  fit="contain"
                  src="https://img3.kepuchina.cn/images/2018/logo.png"
                />
              </i>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="http://www.kepuchina.cn/" target="_blank"
                  >进入科普中国</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.url" class="text item">
                <a v-if="i.typeId === 23" :href="i.url" target="_blank"
                  >{{ i.id }}. &nbsp;{{ i.title }}</a
                >
              </div>
            </el-scrollbar>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>煎蛋网</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-jiandan" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="http://jandan.net/" target="_blank"
                  >进入煎蛋网</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.url" class="text item">
                <a v-if="i.typeId === 10" :href="i.url" target="_blank"
                  >{{ i.id }}. &nbsp;{{ i.title }}</a
                >
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
      count: 0,
      title: "",
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: []
    };
  },
  created() {
    this.getAllList();
  },
  methods: {
    getAllList() {
      this.axios.get("news/gettech_1").then(response => {
        let data = response.data;
        this.list = data;
        // console.log(data);
      });
    }
  }
};
</script>
<style lang="less" scope></style>
