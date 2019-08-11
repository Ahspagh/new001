<template>
  <div>
    <!-- <h1>这是 中通服 </h1> -->
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '500px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>待开发</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-tieba" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href=" " target="_blank">待开发</a>
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="(i, index) in list3" :key="i.url" class="text item">
                <a v-if="i.typeId === 14" :href="i.url" target="_blank"
                  >{{ index + 1 - 20 }} &nbsp;{{ i.title }}</a
                >
              </div>
            </el-scrollbar>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '500px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>待开发</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-tianyashequ" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href=" " target="_blank">待开发</a>
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="(i, index) in list3" :key="i.url" class="text item">
                <a v-if="i.typeId === 15" :href="i.url" target="_blank"
                  >{{ index + 1 - 40 }} &nbsp;{{ i.title }}</a
                >
              </div>
            </el-scrollbar>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '500px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <!-- <span>待开发</span> -->
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-shequ" />
              </svg>
              <div style="float: right; padding: 3px 0" type="text">
                <a class="link" href=" " target="_blank">待开发</a>
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="(i, index) in list3" :key="i.url" class="text item">
                <a v-if="i.typeId === 16" :href="i.url" target="_blank"
                  >{{ index + 1 - 60 }} &nbsp;{{ i.title }}</a
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
