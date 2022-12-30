
export function authsuccess (state, token) {
  state.token = token
  state.status = 'success'
}
export function autherror (state) {
  state.status = 'error'
}
export function logout (state) {
  state.token = ''
  state.status = ''
}
