<template>
  <div class="admin-logo">
    <img src="@/assets/logo.png" alt="">
    <h2>one admin</h2>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.admin-logo {
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 10px;
  img {
    width: 32px;
    height: 32px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    transition: all 0.5s;
    line-height: normal;
    margin-left: 10px;
  }
}
</style>
