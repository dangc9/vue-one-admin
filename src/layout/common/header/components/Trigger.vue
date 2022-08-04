<template>
  <div>
    <div class="trigger" @click="toggleSideBar">
      <i :class="store.state.app.collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const $vm = getCurrentInstance()
const store = $vm.proxy.$store

function toggleSideBar() {
  store.commit('app/Set_Collapsed')
}
</script>

<style lang="scss" scoped>
.trigger {
  width: 40px;
  text-align: center;
  font-size: 16px;
  i {
    margin-top: 5px;
  }
}
</style>
