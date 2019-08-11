<template>
  <div>
    <!-- <h1>这是 潮流剧影 </h1> -->
    <el-row :gutter="30">
      <el-col :span="6" :offset="5">
        {{ test() }}
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '300px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>豆瓣新片榜</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-douban" />
              </svg>
              <div style="float: right; padding: 3px 0; " type="text">
                <a
                  class="link"
                  href="https://movie.douban.com/chart"
                  target="_blank"
                  >进入豆瓣电影</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list2" :key="i.url" class="text item">
                <a v-if="i.typeId === 11" :href="i.url" target="_blank"
                  >{{ i.id }}. &nbsp;{{ i.title }}</a
                >
              </div>
            </el-scrollbar>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6" :offset="2">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '300px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>猫眼今日票房榜</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-maoyandianying" />
              </svg>
              <div style="float: right; padding: 3px 0;" type="text">
                <a class="link" href="https://maoyan.com/" target="_blank"
                  >进入猫眼电影</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list2" :key="i.url" class="text item">
                <a v-if="i.typeId === 25" :href="i.url" target="_blank"
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
      this.axios.get("news/getent_1").then(response => {
        let data = response.data;
        this.list2 = data;
        // console.log(data);
      });
    },
    test() {
      console.log("执行了一次");
    }
  }
  // computed: {
  //   reverseList2() {
  //     return this.list2.reverse();
  //   }
  // }
};
</script>
<style lang="less" scope></style>
