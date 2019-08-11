<template>
  <div class="box">
    <!-- <el-row :gutter="0">
      <el-col :span="6">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五一二三</div>
      </el-col>
      <el-col :span="6" :offset="2">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五一二三</div>
      </el-col>
      <el-col :span="6" :offset="4">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五一二三</div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五一二三</div>
      </el-col>
      <el-col :span="6" :offset="4">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五一二三</div>
      </el-col>
      <el-col :span="6" :offset="2">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五一二三</div>
      </el-col>
    </el-row>-->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
      <el-col :span="6" :push="1">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
      <el-col :span="6" :push="3">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="6">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
      <el-col :span="6" :push="1">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
      <el-col :span="6" :push="3">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="space">
      <el-col :span="6">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
      <el-col :span="6" :push="1">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
      <el-col :span="6" :push="3">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="6">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
      <el-col :span="6" :push="1">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
      <el-col :span="6" :push="3">
        <div class="grid-content bg-purple">一二三四五一二三四五一二三四五</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.el-row {
  //   margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
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
  min-height: 2em;
  line-height: 1.7em;
  font-size: 1.7em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
