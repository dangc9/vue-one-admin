<template>
  <div class="mobile-container">
    <div class="login-title enter-x">手机登录</div>
    <el-form ref="loginForm" :model="formData" :rules="rules" class="login-form">
      <el-form-item prop="mobile" class="enter-x">
        <el-input v-model="formData.mobile" size="small" placeholder="手机号码"></el-input>
      </el-form-item>
      <el-form-item prop="code" class="enter-x">
        <el-col :span="15">
          <el-input v-model="formData.code" size="small" placeholder="验证码"></el-input>
        </el-col>
        <el-col :span="9">
          <el-button size="small" class="moblie-code" :disabled="isStart"  @click="getMoblieCode">{{getButtonText}}</el-button>
        </el-col>
      </el-form-item>
      <el-form-item class="enter-x">
        <el-button type="primary" size="small" style="width: 100%"  @click="handleLogin">登录</el-button>
      </el-form-item>
      <el-form-item class="enter-x">
        <el-button size="small" style="width: 100%"  @click="setLoginType('LOGIN')">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, unref, computed } from 'vue';
import { setLoginType } from './login.js';

const count = 60
const isStart = ref(false);
const currentCount = ref(count);
const getButtonText = computed(() => {
  return !unref(isStart) ? '获取验证码' : `${unref(currentCount)}秒后重新获取`;
});
const rules = {
  mobile: [{ required: true, message: '请输入手机号码' }],
  code: [{ required: true, message: '请输入验证码' }]
}
const formData = reactive({})
const loginForm = ref()
async function handleLogin() {
  const data = await loginForm.value.validate().catch(() => {});
  if (!data) return;
  console.log('success')
}

// 短信验证码计时器
let timerId = null;
function clear() {
  timerId && window.clearInterval(timerId);
}
function stop() {
  isStart.value = false;
  clear();
  timerId = null;
}
function getMoblieCode() {
  // 需要先请求服务器发送短信
  isStart.value = true
  timerId = setInterval(() => {
    if (unref(currentCount) === 1) {
      stop();
      currentCount.value = count;
    } else {
      currentCount.value -= 1;
    }
  }, 1000);
}
</script>

<style lang="scss" scoped>
.mobile-container {
  padding: 2rem 1.25rem;
  .login-title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  .moblie-code {
    float: right;
    margin-top: 4px;
    width: 120px
  }
}
</style>
