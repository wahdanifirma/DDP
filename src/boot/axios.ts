import Vue from 'vue'
import axios, { AxiosInstance } from 'axios'
import { Cookies } from 'quasar'
import { boot } from 'quasar/wrappers'

Vue.prototype.$axios = axios
// ^ ^ ^ this will allow you to use this.$axios
//       so you won't necessarily have to import axios in each vue file
axios.defaults.baseURL = 'https://devapigateway.uzzeet.com/'
axios.interceptors.request.use(function (config) {
    const token = Cookies.get('token')
    config.headers.Authorization = "Bearer " + token;
    return config;
});
const api = axios.create({ baseURL: 'https://devapigateway.uzzeet.com/' })
const socket = axios.create({ baseURL: 'https://api.uzzeet.com:3332/socket.io/' })
Vue.prototype.$api = api
// ^ ^ ^ this will allow you to use this.$api
//       so you can easily perform requests against your app's API

export { axios, api, socket }