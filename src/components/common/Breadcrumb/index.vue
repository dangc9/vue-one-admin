<template>
  <el-breadcrumb class="app-breadcrumb" >
    <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path + index">
      <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect" >{{ item.meta.title }}</span>
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

<script>
import path from 'path-browserify'
export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route(route) {
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      let routes = JSON.parse(JSON.stringify(this.$store.state.permission.routes))
      levelList.forEach((item, index) => {
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
      this.levelList = levelList
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim() === 'home'
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    },
    handleCommand(to) {
      this.$router.push(to)
    },
    isActive(route, index) {
      return route.to === this.$route.matched[index + 1].to
    }
  }
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
