<template>
  <div @click="click">
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" class="fullscreen"/>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Message } from 'element-ui';
import screenfull from 'screenfull'
import { isIE } from '@/utils/common'
const isFullscreen = ref(false)
onMounted(() => {
  screenfull.isEnabled && screenfull.on('change', change)
});
onUnmounted(() => {
  screenfull.isEnabled && screenfull.off('change', change)
});
function click() {
  if (isIE() || !screenfull.isEnabled) {
    Message({ message: '你的浏览器不支持全屏', type: 'warning' })
    return false
  }
  screenfull.toggle()
}
function change() {
  isFullscreen.value = screenfull.isFullscreen
}
</script>

<style scoped>
.fullscreen {
  width: 35px;
}
</style>
