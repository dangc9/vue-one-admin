<template>
  <div class="admin-logo">
    <img src="@/assets/logo.png" alt="">
    <h2 v-show="!store.state.app.collapsed" class="truncate">one admin</h2>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const $vm = getCurrentInstance()
const store = $vm.proxy.$store
</script>

<style lang="scss" scoped>
.admin-logo {
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 10px;
  img {
    width: 28px;
    height: 28px;
    margin-left: 4px;
  }
  h2 {
    width: 120px;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.5s;
    line-height: normal;
    margin-left: 10px;
    color: #fff;
    color: v-bind('store.state.app.appConfig.sider_title_color');
  }
}
</style>
