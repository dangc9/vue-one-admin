import { appConfig } from '@/config/appConfig'

const state = {
  pageLoading: false,
  appConfig: appConfig,
  collapsed: false
}

const mutations = {
  Set_Collapsed: (state) => {
    state.collapsed = !state.collapsed
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
