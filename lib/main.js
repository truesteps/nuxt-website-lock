export const getWebsiteLock = ({ options, ctx, storage }) => {
  return {
    setToken (token) {
      if (typeof token === 'string') {
        storage.setCookie(options.cookieName, token)

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
        ctx.$axios.setHeader('Website-Lock-Token', this.getToken())

        let isAuthenticated = false

        // validate whether user has entered proper token
        try {
          await ctx.$axios.$get('/web-site-lock/token/validate')
          isAuthenticated = true
        } catch (error) {
          // do nothing
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
