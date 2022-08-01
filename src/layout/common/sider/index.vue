<template>
  <div class="sider-bar-container">
    <logo></logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="false"
        active-text-color="#409EFF"
        :collapse-transition="true"
        mode="vertical">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'
import logo from './logo.vue'
import SidebarItem from './SidebarItem'
const $vm = getCurrentInstance()
const route = $vm.proxy.$route
const store = $vm.proxy.$store

const routes = store.state.permission.routes
const isCollapse = false
const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style lang="scss" scoped>
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
  :deep {
    .el-menu-item [class^=el-icon-] {
      font-size: 16px;
      margin-right: 10px;
    }
    .el-menu-item {
      min-width: 100px;
    }

  }
</style>
