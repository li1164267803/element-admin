import vue from 'vue'
import axios from 'axios'

import {standardConfig, serializeConfig} from './config'

function post(url, data, isJson) {
  return axios.post(url, data, isJson ? standardConfig : serializeConfig)
}

function get(url, params) {
  return axios.get(url, {params, ...standardConfig})
}

class API {
  
}

axios.interceptors.request.use(
  config => {
    localStorage.token && (config.headers['authorization'] = 'authorization' + localStorage.token)
    return config
  },
  err => Promise.reject(err)
)
const redirectCodes = [90000, 91000, 91001, 91002], vuex = store

axios.interceptors.response.use(
  res => {
    const {data: {code, data, message}} = res;
    if(code !== 200) {
      vue.prototype.$message.error(message);
      if(redirectCodes.includes(code)) {
        vuex.commit('logout')
        router.push('/login')
      }
      return Promise.reject(res)
    }
    return Promise.resolve(data)
  },
  err => {
    return Promise.reject(err)
  }
)

export default API;