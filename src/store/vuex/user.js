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
  async login({ commit, dispatch }, params) {
    try {
      const res = await request.loginApi(params)
      commit('SET_TOKEN', res.data.token)
      const userInfo = await dispatch('getUserInfo')
      return userInfo
    } catch (res) {
      return Promise.reject(res)
    }
  },
  // 获取登录用户信息
  async getUserInfo({ commit, state }) {
    if (!state.token) return null;
    const res = await request.getUserInfo()
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
