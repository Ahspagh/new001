<template>
  <div>
    <!-- <h1>这是 IT论坛 </h1> -->
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>吾爱破解</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-pojiexiugai" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a
                  class="link"
                  href="https://www.52pojie.cn/portal.php"
                  target="_blank"
                  >进入吾爱破解</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list3" :key="i.url" class="text item">
                <a v-if="i.typeId === 27" :href="i.url" target="_blank"
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
              <!-- <span>CSDN</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-wap_toolbar_csdn" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://www.csdn.net/" target="_blank"
                  >进入CSDN</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list3" :key="i.url" class="text item">
                <a v-if="i.typeId === 28" :href="i.url" target="_blank"
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
              <!-- <span>V2EX</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-v" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://www.v2ex.com/" target="_blank"
                  >进入V2EX</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list3" :key="i.url" class="text item">
                <a v-if="i.typeId === 13" :href="i.url" target="_blank"
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
      this.axios.get("news/getcommunity").then(response => {
        let data = response.data;
        this.list3 = data;
        // console.log(data);
      });
    }
  }
};
</script>
<style lang="less" scope></style>
