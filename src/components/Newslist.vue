<template>
  <div>
    <!-- <h1>这是 GoodsList 组件</h1> -->
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card
            :body-style="{ height: '450px' }"
            class="box-card"
            shadow="hover"
          >
            <div slot="header" class="clearfix">
              <span>typeId===1</span>
              <div style="float: right; padding: 3px 0" type="text">
                <a href="">操作按钮</a>
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="(i, index) in list" :key="i.id" class="text item">
                <a v-if="i.typeId === 1" :href="i.url" target="_blank"
                  >{{ index + 1 }} {{ i.title }}</a
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
              <span>typeId===2</span>
              <div style="float: right; padding: 3px 0" type="text">
                <a href="">操作按钮</a>
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.id" class="text item">
                <a v-if="i.typeId === 2" :href="i.url" target="_blank">{{
                  i.title
                }}</a>
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
              <span>typeId===3</span>
              <div style="float: right; padding: 3px 0" type="text">
                <a href="">操作按钮</a>
              </div>
            </div>
            <el-scrollbar style="height:100%">
              <div v-for="i in list" :key="i.id" class="text item">
                <a v-if="i.typeId === 3" :href="i.url" target="_blank">{{
                  i.title
                }}</a>
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
      this.axios.get("src/lib/getnews.json").then(response => {
        let data = response.data;
        this.list = data;
        // console.log(data);
      });
    }
  }
};
</script>
<style lang="less" scope>
.el-card__header {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-scrollbar__wrap {
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
