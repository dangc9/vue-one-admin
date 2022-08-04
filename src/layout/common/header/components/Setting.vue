<template>
  <div>
    <div @click="handleClick" class="icon">
      <svg-icon icon-class="setting"/>
    </div>
    <el-drawer
      title="项目配置"
      :size="300"
      :visible.sync="drawer">
      <div class="content-container">
        主题配置.。。。
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
function handleClick() {
  drawer.value = true
}
</script>

<style lang="scss" scoped>
  .icon {
    height: 100%;
    display: flex;
    align-items: center;
    .svg-icon {
      width: 35px;
      font-size: 16px;
    }
  }
  .content-container {
    padding: 0 20px;
  }
  :global(.v-modal) {
    opacity: .2;
  }
</style>
