import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)

export const store = createPinia()
export function setupStore(app) {
  app.use(store);
}
