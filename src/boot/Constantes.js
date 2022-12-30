// feature guid generated on backend
// must be updated here manually
export const Constantes = {
  // Server
  APP_VERSION: '2.0.0',
  SERVER_URL: 'https://devapigateway.uzzeet.com/',
  PROTOTYPE: new URLSearchParams(window.location.search).get('prototype') === 'true',
  MAPBOX_TOKEN: 'pk.eyJ1IjoiaHZuc3N3ZWVwc3Rha2VzZm9ybWUiLCJhIjoiY2t2eXQzZ3R2MTYyZjJub2xwa2kwN2p6byJ9.kD-f1OlZ87amK7IS5Qt2iA',
}

export default async ({ Vue }) => {
  Vue.prototype.$Constantes = Constantes
}
