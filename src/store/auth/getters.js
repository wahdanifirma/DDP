// export function authStatus (state) {
//   return state.status
// }

export function loggedIn (state) {
  return state.token !== null
}
