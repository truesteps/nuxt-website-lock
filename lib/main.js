const md5 = require('md5')

export const getWebsiteLock = ({ options, ctx, storage }) => {
  return {
    isServerValidationEnabled: options.enableServerValidation,

    setToken (token) {
      if (typeof token === 'string') {
        storage.setCookie(options.cookieName, this.isServerValidationEnabled ? token : md5(token))

        return true
      }

      return false
    },

    getToken () {
      return storage.getCookie(options.cookieName)
    },

    hasToken () {
      return !!this.getToken()
    },

    async checkIfUserCanRedirect () {
      if (!process.env.WEB_SITE_LOCK_ENABLED) {
        return true
      }

      if (ctx.route.path === options.formPath) {
        return true
      }

      if (this.hasToken()) {
        const token = this.getToken()
        let isAuthenticated = false

        if (this.isServerValidationEnabled) {
          ctx.$axios.setHeader('Website-Lock-Token', token)

          // validate whether user has entered proper token
          try {
            await ctx.$axios.$get('/web-site-lock/token/validate')
            isAuthenticated = true
          } catch (error) {
            // do nothing
          }
        } else {
          isAuthenticated = md5(process.env.WEB_SITE_LOCK_PASSWORD) === token
        }

        if (isAuthenticated) {
          return true
        }
      }

      const query = {}

      if (ctx.route.fullPath !== '/') {
        query.from = ctx.route.fullPath
      }

      ctx.redirect(options.formPath, query)
    }
  }
}
