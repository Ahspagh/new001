<template>
  <section class="app-main">
    <transition name="el-zoom-in-center">
      <search v-show="!show"></search>
    </transition>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  name: "AppMain",
  components: { Search: () => import("./Search") },

  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  /* min-height: calc(100vh - 50px); */
  width: 100%;
  position: relative;
  overflow: hidden;
}
/* .fixed-header+.app-main {
  padding-top: 50px;
} */

/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
  /* :duration="{ enter: 111, leave: 666 }" */
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s ease;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

<style lang="less" scoped></style>
