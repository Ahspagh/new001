<template>
  <div>
    <el-container>
      <el-aside width="220px">
        <nav-sidebar></nav-sidebar>
      </el-aside>
      <el-main>
        <transition name="el-zoom-in-top">
          <app-main v-show="!show"></app-main>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavSidebar from "./components/NavSidebar";
export default {
  data: () => ({
    show: false
  }),
  name: "views",
  components: {
    NavSidebar,
    // Search: () => import("./components/Search"),
    AppMain: () => import("./components/AppMain")
  },

  computed: {},
  methods: {},
  mounted() {
    // this.show = !this.show;
  }
};
</script>

<style lang="less" scoped></style>
