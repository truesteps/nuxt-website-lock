import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fdca50c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4d71c895 = () => interopDefault(import('../../lib/pages/index.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1fdca50c,
    name: "index"
  }, {
    path: "/website-lock",
    component: _4d71c895,
    name: "website-lock"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
