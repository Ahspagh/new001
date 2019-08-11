<template>
  <div>
    <el-row
      :gutter="5"
      type="flex"
      justify="space-around"
      style="margin-bottom: 20px;"
    >
      <el-col :span="23">
        <el-autocomplete
          class="el-input"
          popper-class="my-autocomplete"
          v-model="state"
          prefix-icon="el-icon-edit"
          suffix-icon
          clearable
          :fetch-suggestions="querySearch"
          placeholder="请输入热点关键词或文章关键字……"
          :trigger-on-focus="false"
          @select="handleSelect"
          @keyup.enter.native="searchQ()"
        >
          <!-- <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i> -->
          <template slot-scope="{ item }">
            <div class="name">{{ item.title }}</div>
            <!-- <span class="addr">{{ item.typeId }}</span> -->
            <!-- <div class="name">{{ item.value }}</div> -->
            <!-- <span class="addr">{{ item.address }}</span> -->
          </template>
        </el-autocomplete>
      </el-col>
      <el-col :span="1">
        <el-button
          type="primary"
          icon="el-icon-search"
          @click.native="urlOpen()"
        ></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import AppMain from "./AppMain";
export default {
  name: "Search",
  components: {
    // AppMain
  },
  data() {
    return {
      data: [],
      show: false,
      state: "",
      stateUrl: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      this.axios
        .post("index/search", {
          title: queryString,
          pageNum: "2",
          pageSize: "6"
        })
        .then(result => {
          if (result.data) {
            // console.log(result);
            cb(result.data.list);
          } else {
            alert("查询失败！");
          }
        });
    },

    loadAll() {
      return [];
    },

    handleSelect(item) {
      // console.log(item);
      this.state = item.title;
      this.stateUrl = item.url;
    },
    // handleIconClick(ev) {
    //   console.log(ev);
    // }
    urlOpen() {
      if (this.state) {
        window.open(this.stateUrl);
        this.stateUrl = "";
        this.state = "";
      } else {
        this.$message("你查什么东西？");
        return false;
      }
    },
    searchQ() {
      if (this.state) {
        window.open(
          "https://cn.bing.com/search?q=" + this.state + "&PC=U316&FORM=CHROMN"
        );
        this.state = "";
      } else {
        this.$message("输入为空呢……");
        return false;
      }
    }
  },
  mounted() {
    this.data = this.loadAll();
  }
};
</script>

<style lang="less" scoped>
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
.el-button--primary {
  padding: 10px 13px;
  box-shadow: 0px 0px 10px #b3b1b1a4;
}
div.el-input {
  border-radius: 9px;
  box-shadow: 0px 10px 12px #b3b1b1a4;
}
</style>
