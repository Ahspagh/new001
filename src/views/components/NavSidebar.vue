<template>
  <el-scrollbar style="height:100vh">
    <el-collapse-transition>
      <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-vertical-demo"
        background-color="#26BCD5"
        text-color="#A7DCE0"
        active-text-color="#D6C84B"
        v-show="!show"
      >
        <el-menu-item
          v-for="(item, i) in navList"
          :key="i"
          v-show="!item.children"
          :index="item.name"
          :class="item.singleitem"
        >
          <template slot="title">
            <i :class="item.navicon"></i>
            {{ item.navItem }}
          </template>
        </el-menu-item>
        <el-submenu
          v-for="item in navList"
          :key="item.name"
          v-show="item.children"
          :index="item.name"
        >
          <template slot="title">
            <i :class="item.navicon"></i>
            {{ item.navItem }}
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(sec, j) in item.children"
              :key="j"
              :index="sec.name"
              >{{ sec.navItem }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu></el-collapse-transition
    >
  </el-scrollbar>
</template>

<script>
export default {
  name: "NavSidebar",
  data() {
    return {
      isCollapse: false,
      navList: [
        {
          name: "/account",
          navItem: "测试",
          navicon: "iconfont icon-setting",
          singleitem: "singleitem"
        },
        {
          name: "/index",
          navItem: "实时实事",
          navicon: "iconfont icon-hot", //i  标签  icon class名
          singleitem: "singleitem"
        },
        {
          name: "/news",
          navItem: "综合",
          navicon: "iconfont icon-zonghe",
          children: [
            { name: "/news/news-1", navItem: "知微见著" },
            { name: "/news/news-2", navItem: "头条快讯" }
          ]
        },
        {
          name: "/tech",
          navItem: "科技",
          navicon: "iconfont icon-keji",
          children: [
            { name: "/tech/tech-1", navItem: "科普人文" },
            { name: "/tech/tech-2", navItem: "潮流产品" },
            { name: "/tech/tech-3", navItem: "互联网商业" }
          ]
        },
        {
          name: "/ent",
          navItem: "娱乐",
          navicon: "iconfont icon-yule",
          children: [
            { name: "/ent/ent-1", navItem: "潮流剧影" },
            { name: "/ent/ent-2", navItem: "视频内容" }
          ]
        },
        {
          name: "/community",
          navItem: "社区",
          navicon: "iconfont icon-shequ1",
          children: [
            { name: "/community/community-1", navItem: "IT论坛" },
            { name: "/community/community-2", navItem: "BBS社区" }
          ]
        },
        {
          name: "/company",
          navItem: "公司",
          navicon: "iconfont icon-gongsi",
          children: [
            { name: "/company/company-1", navItem: "中数通" },
            { name: "/company/company-2", navItem: "中通服" }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style></style>
