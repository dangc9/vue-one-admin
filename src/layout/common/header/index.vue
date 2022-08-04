<template>
  <div class="header-container">
    <div class="header-left">
      <Trigger class="header-action_item"/>
      <breadcrumb/>
    </div>
    <div class="header-action">
      <notice class="header-action_item" />
      <screenfull class="header-action_item" />
      <user class="header-action_item"/>
      <setting class="header-action_item"/>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/common/Breadcrumb'
import Screenfull from './Screenfull'
import Notice from './Notice'
import User from './User'
import Setting from './Setting'
import Trigger from './Trigger'
</script>

<style lang="scss" scoped>
  .header-container {
    height: 50px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;;
    .hamburger-container {
      display: flex;
      height: 100%;
      padding: 0px 10px;
      cursor: pointer;
      align-items: center;
      transition: background .3s;
      &:hover {
        background-color: #f6f6f6;
      }
    }
    .header-left, .header-action {
      display: flex;
      height: 100%;
      align-items: center;
    }
    .header-action {
      min-width: 180px;
    }
    .header-action_item {
      display: flex;
      height: 48px;
      font-size: 14px;
      padding: 0 2px;
      cursor: pointer;
      align-items: center;
      color: rgba(0, 0, 0, 0.75);
      transition: background .3s;
      &:hover {
        background-color: #f6f6f6;
      }
    }
  }
</style>
