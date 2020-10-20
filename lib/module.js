import Config from './utilities/config'

const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['website-lock'],
    ...this.options.websiteLock,
    ...moduleOptions
  }

  if (this.options.router) {
    this.options.router.extendRoutes = (routes, resolve) => {
      routes.push({
        path: Config.formPath,
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'website-lock'
      })
    }
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-website-lock.js',
    options,
    ssr: true
  })

  this.addTemplate({
    fileName: 'nuxt-website-lock/storage.js',
    src: resolve(__dirname, 'utilities/storage.js')
  })

  this.addTemplate({
    fileName: 'nuxt-website-lock/main.js',
    src: resolve(__dirname, 'main.js')
  })

  this.addTemplate({
    fileName: 'nuxt-website-lock/config.js',
    src: resolve(__dirname, 'utilities/config.js')
  })
}

module.exports.meta = require('../package.json')
