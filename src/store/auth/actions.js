import axios from 'axios'
import { Cookies } from 'quasar'

export function login ({ commit }, form) {
  return new Promise((resolve, reject) => {
    console.log(form)
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post('https://devapigateway.uzzeet.com/userservice/user/login', form, config)
      .then((resp) => {
        if (resp.data.response === 200) {
          const token = resp.data.result.token
          if (token) {
            Cookies.set('token', token)
            commit('vehicle', { token })
            return resolve(resp)
          }
        } else {
          Cookies.remove('token')
          commit('autherror')
          reject(resp)
        }
      })
    console.log(form)
  })
}

export function logout ({ commit }) {
  return new Promise((resolve) => {
    Cookies.remove('token')
    commit('logout')
    this.$router.push('/login')
    resolve()
  })
}
