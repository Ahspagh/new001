<template>
  <div>
    <!-- <h1>这是 潮流产品 </h1> -->
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>IT之家</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-ITzhijia" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://www.ithome.com/" target="_blank"
                  >进入IT之家</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list1" :key="i.url" class="text item">
                <a v-if="i.typeId === 22" :href="i.url" target="_blank"
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
              <!-- <span>少数派</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-sspai" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://sspai.com/" target="_blank"
                  >进入少数派</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list1" :key="i.url" class="text item">
                <a v-if="i.typeId === 20" :href="i.url" target="_blank"
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
              <!-- <span>小众软件</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-ruanjian" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href="https://www.appinn.com/" target="_blank"
                  >进入小众软件</a
                >
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list1" :key="i.url" class="text item">
                <a v-if="i.typeId === 21" :href="i.url" target="_blank"
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
