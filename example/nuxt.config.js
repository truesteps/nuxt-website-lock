const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  env: {
    APP_URL: 'http://localhost:3000',
    NUXT_API_URL: 'http://localhost/bistro/tady-hub'
  },
  modules: [
    {
      handler: require('../'),
      options: {
        enableServerValidation: false,
        password: 'superSecretPassword',
        enabled: true
      }
    },
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
