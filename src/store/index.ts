import { store } from 'quasar/wrappers'
import Vuex from 'vuex'
import auth from './auth'

export interface StateInterface {
  example: unknown
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)
  const Store = new Vuex.Store<StateInterface>({
    modules: {
      auth,
    },
    strict: !!process.env.DEBUGGING
  })
  return Store
})
