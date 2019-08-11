<template>
  <div>
    <!-- <h1>这是 视频内容 </h1> -->
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>抖音</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-douyin" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://www.douyin.com/" target="_blank"
                  >下载抖音app</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list2" :key="i.url" class="text item">
                <a v-if="i.typeId === 24" :href="i.url" target="_blank"
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
              <!-- <span>Bilibili</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-iconfont-bilibili" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a
                  class="link"
                  href="https://www.bilibili.com/ranking?spm_id_from=333.334.b_62616e6e65725f6c696e6b.11"
                  target="_blank"
                  >进入Blibli排行榜</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list2" :key="i.url" class="text item">
                <a v-if="i.typeId === 9" :href="i.url" target="_blank"
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
              <!-- <span>ACFun</span> -->
              <svg
                class="icon svg-icon"
                aria-hidden="true"
                style="width: 6em; height: 3em;"
              >
                <use xlink:href="#icon-acfun-copy" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href target="_blank">进入ACFun</a>
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list2" :key="i.url" class="text item">
                <a v-if="i.typeId === 26" :href="i.url" target="_blank"
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
      this.axios.get("news/getent_2").then(response => {
        let data = response.data;
        this.list2 = data;
        // console.log(data);
      });
    }
  }
};
</script>
<style lang="less" scope></style>
