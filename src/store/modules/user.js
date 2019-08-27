import {login} from '@/api/login'
const user = {
  state: {
    token: localStorage.token,
    name: '',
    avatar: '',
    roles: [],
    isLock: localStorage.isLock || false,
    lockPasswd: localStorage.lockPasswd || '',
    browserHeaderTitle: localStorage.browserHeaderTitle || 'NxAdmin'
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },
  actions: {
    // 登录
    Login({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((reslove, reject) => {
        // login
      })
    }
  }
}