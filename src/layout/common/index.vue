<template>
  <div >
    <el-container class="layout-wrapper">
      <el-aside :width="store.state.app.collapsed ? '54px': '200px'" class="sidebar-container">
        <LayoutSideBar/>
      </el-aside>
      <el-container>
        <el-header>
          <LayoutHeader/>
          <LayoutTagsBar/>
        </el-header>
        <el-main>
          <LayoutContent/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import LayoutSideBar from './sider/index.vue'
import LayoutTagsBar from './tags/index.vue'
import LayoutHeader from './header/index.vue'
import LayoutContent from './content/index.vue'
import { getCurrentInstance } from 'vue'
const $vm = getCurrentInstance()
const store = $vm.proxy.$store
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100vh;
  .el-header {
    height: auto !important;
    padding: 0;
  }
  .sidebar-container {
    -webkit-transition: width .28s;
    transition: width 0.28s;
  }
}
</style>
