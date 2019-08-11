<template>
  <div>
    <!-- <h1>这是 互联网商业 </h1> -->
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>虎嗅</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-huxiu" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://www.huxiu.com/" target="_blank"
                  >进入虎嗅</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list1" :key="i.url" class="text item">
                <a v-if="i.typeId === 8" :href="i.url" target="_blank"
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
              <!-- <span>36氪</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-kekongjian_danziLOGOheidi" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://36kr.com/" target="_blank"
                  >进入36氪</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list1" :key="i.url" class="text item">
                <a v-if="i.typeId === 5" :href="i.url" target="_blank"
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
              <!-- <span>好奇心日报</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-haoqixinribao" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="http://www.qdaily.com/" target="_blank"
                  >进入好奇心日报</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list1" :key="i.url" class="text item">
                <a v-if="i.typeId === 6" :href="i.url" target="_blank"
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
      this.axios.get("news/gettech").then(response => {
        let data = response.data;
        this.list1 = data;
        // console.log(data);
      });
    }
  }
};
</script>
<style lang="less" scope></style>
