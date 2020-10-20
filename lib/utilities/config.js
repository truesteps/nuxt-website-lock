export default {
  formPath: process.env.WEBSITE_LOCK_FORM_PATH || '/website-lock',
  enableServerValidation: process.env.WEBSITE_LOCK_ENABLE_SERVER_VALIDATION || false,
  cookieName: 'websiteLock._token',
  cookie: {
    prefix: '',
    expires: 2
  }
}
