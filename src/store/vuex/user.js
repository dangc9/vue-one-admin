import request from '@/api/sys/user';
import { getToken, setToken } from '@/utils/auth'

const state = {
  token: getToken(),
  userInfo: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, val) => {
    state.token = val
    setToken(val)
  },
  SET_USERINFO: (state, val) => {
    state.userInfo = val
  },
  SET_ROLES: (state, val) => {
    state.roles = val
  }
}

const actions = {
  async login({ commit }, params) {
    try {
      const res = await request.loginApi(params)
      commit('SET_TOKEN', res.data.token)
      return res.data
    } catch (res) {
      return Promise.reject(res)
    }
  },
  // 获取登录用户信息
  async getUserInfo({ commit, state }) {
    if (!state?.token) return null;
    const res = await request.getUserInfo(state.token)
    const userInfo = res.data
    const { roles } = userInfo;
    if (roles?.length > 0) {
      const roleList = roles.map((item) => item.value);
      commit('SET_ROLES', roleList)
    } else {
      userInfo.roles = [];
      commit('SET_ROLES', [])
    }
    commit('SET_USERINFO', userInfo)
    return userInfo;
  },
  async logout({ commit, state }) {
    const res = await request.logoutApi()
    if (!res) return;
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    return true
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
