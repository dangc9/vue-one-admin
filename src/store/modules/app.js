import { defineStore } from 'pinia'
import { store } from '@/store';
const app = defineStore('appStore', {
  state: () => ({
    isMobile: false,
  }),
  getters: {
    getIsMobile() {
      return this.isMobile || false;
    },
  },
  actions: {
    setIsMobile(val) {
      this.isMobile = val || false;
    },
  }
})

export function appStore() {
  return app(store);
}
