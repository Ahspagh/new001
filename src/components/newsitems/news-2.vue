<template>
  <div>
    <!-- <h1>这是 头条快讯 </h1> -->
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>今日头条</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-jinritoutiao" />
              </svg>

              <div style="float: right; padding: 3px 0" type="text">
                <a
                  class="link"
                  href="https://www.toutiao.com/"
                  target="_blank"
                  style="border"
                  >进入头条</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.url" class="text item">
                <a v-if="i.typeId === 19" :href="i.url" target="_blank"
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
              <!-- <span>Zaker新闻</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-cnzaker" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="http://www.myzaker.com/  " target="_blank"
                  >进入Zaker</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.url" class="text item">
                <a v-if="i.typeId === 18" :href="i.url" target="_blank"
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
              <!-- <span>澎湃新闻</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-pengpaiwang" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://www.thepaper.cn/" target="_blank"
                  >进入澎湃新闻</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.url" class="text item">
                <a v-if="i.typeId === 17" :href="i.url" target="_blank"
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
      this.axios.get("news/getnews_2").then(response => {
        let data = response.data;
        this.list = data;
        // console.log(data);
      });
    }
  }
};
</script>
<style lang="less" scope></style>
