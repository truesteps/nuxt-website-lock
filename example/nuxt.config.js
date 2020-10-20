const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  env: {
    APP_URL: 'http://localhost:3000',
    NUXT_API_URL: 'http://localhost/bistro/tady-hub',
    WEB_SITE_LOCK_ENABLED: true,
    WEB_SITE_LOCK_PASSWORD: 'superSecretPassword'
  },
  modules: [
    { handler: require('../') },
    '@nuxtjs/axios'
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://localhost/bistro/tady-hub'
  }
}
