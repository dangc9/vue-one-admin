import { defineStore } from 'pinia'
import { store } from '@/store';
const sysStore = defineStore('sysStore', {
  state: () => ({
    userInfo: null,
    token: undefined,
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
      this.token = val || undefined;
    },
    setRoleList(val) {
      this.roleList = val || [];
    },
    setUserInfo(val) {
      this.userInfo = val || null;
    }
  }
})

export function sysStoreWithOut() {
  return sysStore(store);
}
