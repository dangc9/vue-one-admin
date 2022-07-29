import { defineStore } from 'pinia'
import { store } from '@/store';
import request from '@/api/sys/user';
import { getToken, setToken } from '@/utils/auth'
import { router } from '@/router'
const userStore = defineStore('userStore', {
  state: () => ({
    userInfo: null,
    token: getToken(),
    roleList: []
  }),
  getters: {
    getUserInfo() {
      return this.userInfo || {};
    },
    getToken() {
      return this.token;
    },
    getRoleList() {
      return this.roleList;
    }
  },
  actions: {
    setToken(val) {
      this.token = val;
      setToken(val)
    },
    setRoleList(val) {
      this.roleList = val || [];
    },
    setUserInfo(val) {
      this.userInfo = val || null;
    },
    // 登录操作
    login(params) {
      console.log(params)
      // try {
      //   // const res = await request.loginApi(params)
      //   // this.setToken(res.data.token)
      //   // const userInfo = await this.getUserInfoAction();
      //   // return userInfo
      //   console.log(1)
      //   return true
      // } catch (res) {
      //   return Promise.reject(res)
      // }
    },
    // 获取登录用户信息
    async getUserInfoAction() {
      if (!this.getToken) return null;
      const res = await request.getUserInfo()
      const userInfo = res.data
      const { roles } = userInfo;
      if (roles?.length > 0) {
        const roleList = roles.map((item) => item.value);
        this.setRoleList(roleList);
      } else {
        userInfo.roles = [];
        this.setRoleList([]);
      }
      this.setUserInfo(userInfo);
      return userInfo;
    },
    // 注销登录
    async logout() {
      if (this.getToken) {
        try {
          await request.logoutApi();
        } catch {
          console.log('注销Token失败');
        }
      }
      this.setToken(undefined);
      this.setUserInfo(null);
      router.push('login');
    }
  }
})

export function useUserStore() {
  return userStore(store);
}
