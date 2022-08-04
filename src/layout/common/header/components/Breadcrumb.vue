<template>
  <el-breadcrumb class="app-breadcrumb" >
    <el-breadcrumb-item v-for="(item,index) in list" :key="item.path + index">
      <span v-if="item.redirect==='noRedirect'||index==list.length-1" class="no-redirect" >{{ item.meta.title }}</span>
      <el-dropdown v-else placement="bottom" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ item.meta.title }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(route, index1) in item.children || []"
            :key="route.path + index1"
            :command="route.to">
            <div :class="{'active' : isActive(route, index)}">{{ route.meta.title }}</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch, getCurrentInstance } from 'vue'
import { useRoute, useRouter } from '@/router/instance.js'
import path from 'path-browserify'
const list = ref(null)
const $vm = getCurrentInstance()
const store = $vm.proxy.$store

const router = useRouter()
const route = useRoute()
getBreadcrumb()
watch(() => route.path, () => {
  console.log(1)
  if (route.path.startsWith('/redirect/')) return;
  getBreadcrumb()
})
function getBreadcrumb() {
  const matched = route.matched.filter(item => item.meta && item.meta.title)
  const levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
  let routes = JSON.parse(JSON.stringify(store.state.permission.routes))
  levelList.forEach(item => {
    item.to = item.path
    const first = routes.find(a => item.path === a.path || item.path === a.to)
    if (first?.children) {
      item.children = first.children
      routes = first.children
      item.children.forEach(b => {
        b.to = path.resolve(item.to, b.path)
      })
    }
  })
  list.value = levelList
}
function handleCommand(to) {
  router.push(to)
  console.log(route.path)
}
function isActive(val, index) {
  return val.to === route.matched[index + 1].to
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #999;
    cursor: text;
  }
}
.el-dropdown-link {
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
}
.active {
  color: #66b1ff;
}
.el-dropdown-menu__item:hover {
  color: #606266;
}
:deep() {
  .el-breadcrumb__separator {
    font-weight: 300 !important;
  }
}
</style>
