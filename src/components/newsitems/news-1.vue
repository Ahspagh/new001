<template>
  <div>
    <!-- <h1>这是 知微见著 </h1> -->
    <el-row :gutter="30">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>微博</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-weibo1" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://weibo.com/" target="_blank"
                  >进入微博</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.url" class="text item">
                <a v-if="i.typeId === 1" :href="i.url" target="_blank"
                  >{{ i.id }}. &nbsp;{{ i.title }}</a
                >
              </div>
            </el-scrollbar>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8" :offset="1">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>知乎</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-zhihu" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a
                  class="link"
                  href="https://www.zhihu.com/explore"
                  target="_blank"
                  >进入知乎</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.url" class="text item">
                <a v-if="i.typeId === 3" :href="i.url" target="_blank"
                  >{{ i.id }}. &nbsp;{{ i.title }}</a
                >
              </div>
            </el-scrollbar>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8" :offset="1">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>微信</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-weixin" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://wx.qq.com/" target="_blank"
                  >登录微信网页版</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.url" class="text item">
                <a v-if="i.typeId === 4" :href="i.url" target="_blank"
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
      this.axios.get("news/getnews_1").then(response => {
        let data = response.data;
        this.list = data;
        // console.log(data);
      });
    }
  }
};
</script>
<style lang="less" scope></style>
