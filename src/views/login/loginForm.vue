<template>
  <div class="login-container">
    <div class="login-title enter-x">one-admin</div>
    <el-form ref="loginForm" :model="formData" :rules="rules" class="login-form">
      <el-form-item prop="account" class="enter-x">
        <el-input v-model="formData.account" size="small" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password" class="enter-x">
        <el-input v-model="formData.password" show-password size="small" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="code" class="enter-x">
        <el-col :span="16">
          <el-input v-model="formData.code" size="small" placeholder="验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <img class="login-code" src="https://d2.pub/d2-admin/preview/img/login-code.10fef840.png" alt="">
        </el-col>
      </el-form-item>
      <el-form-item class="enter-x" style="margin-bottom: 0">
        <el-col :span="12">
          <el-checkbox v-model="formData.checked">记住我</el-checkbox>
        </el-col>
        <el-col :span="12" :style="{ 'text-align': 'right' }">
          <el-link type="primary" :underline="false">忘记密码?</el-link>
        </el-col>
      </el-form-item>
      <div class="enter-x">
        <el-form-item>
          <el-button type="primary" size="small" style="width: 100%"  @click="handleLogin" :loading="loading">登录</el-button>
        </el-form-item>
        <el-row class="handle-tab">
          <el-col :span="8" :xs="24">
            <el-button size="mini" @click="setLoginType('MOBILE')">手机登录</el-button>
          </el-col>
          <el-col :span="8" :xs="24" class="center-tab">
            <el-button size="mini" @click="setLoginType('QR_CODE')">二维码登录</el-button>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-button size="mini" @click="setLoginType('REGISTER')">注册</el-button>
          </el-col>
        </el-row>
        <el-divider>其他登录方式</el-divider>
        <div class="other-login">
          <i class="el-icon-orange"></i>
          <i class="el-icon-pear"></i>
          <i class="el-icon-apple"></i>
          <i class="el-icon-coffee"></i>
          <i class="el-icon-ice-tea"></i>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { setLoginType } from './login.js';
// import { useStore } from 'vuex';
// const store = useStore()
// import store from '@/store/index';
// console.log(store.state.account)
// const $vm = getCurrentInstance()
// const router = $vm.proxy.$router
// const route = $vm.proxy.$route
// console.log(route)
// import { useStore } from '@/store/use.js'
// const store = useStore()
// console.log(store.counter)
const rules = {
  // code: [{ required: true, message: '请输入验证码' }],
  account: [{ required: true, message: '请输入账号' }],
  password: [{ required: true, message: '请输入密码' }]
}
const formData = reactive({
  account: 'admin',
  password: 'oneAdmin'
})
const loading = ref(false);
const loginForm = ref()
async function handleLogin() {
  const data = await loginForm.value.validate().catch(() => {});
  if (!data) return;
  console.log(1)
  // loading.value = true
  // store.increment()
  // console.log(store.counter)
  // const res = userStore.login(formData);
  // loading.value = false
  // if (!res) return;
  // console.log(res)
  // router.push('/')
}
</script>

<style lang="scss" scoped>
.login-container {
  padding: 2rem 1.25rem;
  .login-title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
}
.login-form {
  width: 100%;
  .el-input {
    width: 100%;
  }
  .el-button {
    width: 100%;
  }
  .login-code {
    float: right;
    width: 90;
    height: 38px;
  }
  .handle-tab {
    text-align: center;
    .el-col {
      margin-bottom: 0.5rem;
    }
  }
  .el-divider__text {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45);
  }
  .other-login {
    display: flex;
    justify-content: space-evenly;
    i {
      display: inline-block;
      font-size: 22px;
      color: #888;
      cursor: pointer;
    }
  }
}
@media (min-width: 768px) {
  .center-tab .el-button {
    width: calc(100% - 1rem);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}
</style>
