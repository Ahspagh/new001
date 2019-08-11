<template>
  <div>
    <!-- <h1>这是 实时事实 </h1> -->
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>实时热点</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-redian" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a
                  class="link"
                  href="http://top.baidu.com/buzz?b=1&fr=topbuzz_b42"
                  target="_blank"
                  >实时热点</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list1" :key="i.url" class="text item">
                <a v-if="i.typeId === 29" :href="i.url" target="_blank"
                  >{{ i.id }} &nbsp;{{ i.title }}</a
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
              <!-- <span>今日热点</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-_hotpoint" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a
                  class="link"
                  href="http://top.baidu.com/buzz?b=341&fr=topbuzz_b1"
                  target="_blank"
                  >今日热点</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list1" :key="i.url" class="text item">
                <a v-if="i.typeId === 30" :href="i.url" target="_blank"
                  >{{ i.id }} &nbsp;{{ i.title }}</a
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
              <!-- <span>七日热点</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-redianshijian-" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a
                  class="link"
                  href="http://top.baidu.com/buzz?b=42&fr=topbuzz_b341"
                  target="_blank"
                  >七天热点</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list1" :key="i.url" class="text item">
                <a v-if="i.typeId === 31" :href="i.url" target="_blank"
                  >{{ i.id }} &nbsp;{{ i.title }}</a
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
      this.axios.get("news/getindexnews").then(response => {
        let data = response.data;
        this.list1 = data;
        // console.log(data);
      });
    }
  }
};
</script>
<style lang="less" scope></style>
