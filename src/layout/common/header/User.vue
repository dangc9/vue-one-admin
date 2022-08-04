<template>
  <el-dropdown class="user-container" @command="handleCommand">
    <div class="user-item">
      <img :src="userInfo.avatar" alt="">
      <span>{{userInfo.name}}</span>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :command="0"><i class="el-icon-user"></i> 个人资料</el-dropdown-item>
      <el-dropdown-item :command="1"><i class="el-icon-document"></i> 文档</el-dropdown-item>
      <el-dropdown-item :command="2"><svg-icon icon-class="github" class="svg-icon"/> github</el-dropdown-item>
      <el-dropdown-item :command="3" divided><i class="el-icon-switch-button"></i> 退出系统</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'
const $vm = getCurrentInstance()
const store = $vm.proxy.$store
const router = $vm.proxy.$router
const confirm = $vm.proxy.$confirm
const userInfo = computed(() => store.state.user.userInfo)
const dropdownList = [
  { title: '个人资料' },
  { title: '文档' },
  { title: 'github', url: 'https://github.com/dangc9/vue-one-admin' },
  { title: '退出系统', divided: true, type: 'logout' }
]
async function handleCommand(index) {
  const { url, to, type } = dropdownList[index]
  url && window.open(url)
  to && router.push(to)
  if (type === 'logout') {
    const isConfirm = await confirm('是否确认退出系统?', '温馨提醒', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).catch(() => {})
    if (!isConfirm) return;
    const res = await store.dispatch('user/logout')
    if (!res) return;
    router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
  .user-container {
    height: 100%;
    .user-item {
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 15px;
      img {
        width: 24px;
        height: 24px;
        margin-right: 12px;
        border-radius: 50%;
      }
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  .svg-icon {
    display: inline-block;
    margin-right: 5px;
  }
</style>
