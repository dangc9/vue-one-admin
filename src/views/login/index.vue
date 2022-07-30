<template>
  <div class="container">
    <div class="login-form">
      <loginForm v-show="isShowLogin"></loginForm>
      <mobileForm v-show="isShowMobile"></mobileForm>
    </div>
  </div>
</template>

<script setup>
import loginForm from './loginForm.vue';
import mobileForm from './MobileForm.vue';
import { unref, computed } from 'vue';
import { getLoginType } from './login.js';
const isShowLogin = computed(() => unref(getLoginType) === 'LOGIN');
const isShowMobile = computed(() => unref(getLoginType) === 'MOBILE');
</script>

<style lang="scss" scoped>
.login-form {
  width: 400px;
  margin: 0 auto;
  padding-top: 200px;
}
.container {
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}
:deep() {
  .el-form-item {
    margin-bottom: 15px;
  }
  .el-form-item__error {
    padding-top: 1px;
    padding-left: 1px;
  }
}
</style>
