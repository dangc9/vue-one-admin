<template>
  <div class="sider-bar-container">
    <logo></logo>
    <el-scrollbar class="scrollbar-wrapper"  :class="{'collapsed': store.state.app.collapsed }">
      <el-menu
        :default-active="activeMenu"
        :collapse="store.state.app.collapsed"
        :background-color="appConfig.sider_bg_color"
        :text-color="appConfig.sider_text_color"
        :unique-opened="false"
        :active-text-color="appConfig.sider_active_text_color"
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
const appConfig = computed(() => store.state.app.appConfig)
const activeMenu = computed(() => {
  const { meta, path } = route
  console.log(1)
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style lang="scss" scoped>
  .sider-bar-container {
    height: 100%;
    background-color: #273352;
    background-color: v-bind('appConfig.sider_bg_color');
  }
  .scrollbar-wrapper {
    height: calc(100% - 50px);
    .el-menu {
      border: none;
      width: 100% !important;
    }
  }
  .el-menu--collapse, .collapsed {
    :deep() {
      .el-submenu .el-submenu__title span, .el-menu-item span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
      .el-submenu__icon-arrow, .nest-menu .sub-el-icon {
        display: none;
      }
    }
  }
  :deep() {
    .el-menu-item [class^=el-icon-], .el-submenu [class^=el-icon-] {
      font-size: 18px;
      margin-right: 10px;
    }
    .el-menu-item:hover {
      background-color: '#fff';
      background-color: v-bind('appConfig.sider_active_bg_color') !important;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
</style>
