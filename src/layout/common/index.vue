<template>
  <div class="layout-wrapper">
    <div>
      <el-container>
        <el-aside width="200px">
          <LayoutSideBar/>
        </el-aside>
        <el-container>
          <LayoutTagsBar/>
          <LayoutHeader/>
          <LayoutContent/>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import LayoutSideBar from './sider/index.vue'
import LayoutTagsBar from './tags/index.vue'
import LayoutHeader from './header/index.vue'
import LayoutContent from './content/index.vue'
</script>
