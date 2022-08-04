<template>
  <div class="notice-container">
    <el-popover
      placement="bottom"
      width="250"
      trigger="click"
      class="notice-badge">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="待办(10)" name="todo">
          <ul>
            <li>待办1</li>
            <li>待办2</li>
            <li>待办3</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="通知(6)" name="notice">
          <ul>
            <li>通知1</li>
            <li>通知2</li>
            <li>通知3</li>
          </ul>
        </el-tab-pane>
      </el-tabs>
      <div slot="reference" class="notice-badge">
        <el-badge is-dot slot="reference">
          <svg-icon icon-class="notice" class="svg-icon"></svg-icon>
        </el-badge>
      </div>
    </el-popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeName = ref('todo')
function handleClick(val) {
  activeName.value = val.name
}
</script>

<style lang="scss" scoped>
  .notice-badge, :deep(.el-popover__reference-wrapper) {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .svg-icon {
    width: 32px;
  }
</style>
