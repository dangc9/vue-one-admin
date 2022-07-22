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
      <el-form-item class="enter-x">
        <el-row>
          <el-col :span="12">
            <el-checkbox v-model="formData.checked">记住我</el-checkbox>
          </el-col>
          <el-col :span="12" :style="{ 'text-align': 'right' }">
            <el-link type="primary" :underline="false">忘记密码?</el-link>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item class="enter-x">
        <el-button type="primary" size="small" style="width: 100%"  @click="handleLogin">登录</el-button>
      </el-form-item>
      <el-row class="handle-tab enter-x">
        <el-col :span="8" :xs="24">
          <el-button size="mini">手机登录</el-button>
        </el-col>
        <el-col :span="8" :xs="24" class="center-tab">
          <el-button size="mini">二维码登录</el-button>
        </el-col>
        <el-col :span="8" :xs="24">
          <el-button size="mini">注册</el-button>
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
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const rules = {
  account: [{ required: true, message: '请输入账号' }],
  password: [{ required: true, message: '请输入密码' }]
}
const formData = reactive({
  account: 'admin',
  password: 'oneAdmin'
})
const loginForm = ref()
async function handleLogin() {
  const data = await loginForm.value.validate().catch(() => {});
  if (!data) return;
  console.log(formData)
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
  .el-form-item {
    margin-bottom: 15px;
  }
  .el-button {
    width: 100%;
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
::v-deep {
  .el-form-item__error {
    padding-top: 1px;
    padding-left: 1px;
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
