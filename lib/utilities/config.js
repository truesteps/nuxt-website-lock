export default {
  formPath: process.env.WEBSITE_LOCK_FORM_PATH || '/website-lock',
  cookieName: 'websiteLock._token',
  cookie: {
    prefix: '',
    expires: 2
  }
}
