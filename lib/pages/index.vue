<template>
  <div class="website-lock">
    <div class="login">
      <div v-if="errors.length > 0" class="alert__wrap">
        <div v-for="(error, index) in errors" :key="index" class="login__form-error">
          {{ error }}
        </div>
      </div>

      <h1 class="login__heading">
        This website is locked.
      </h1>

      <form class="login__form" method="post" action="#" @submit.prevent="sendForm">
        <div class="login__form-input-wrap">
          <label for="login-password" class="login__form-label">Password</label>

          <input
            id="login-password"
            v-model="password"
            class="login__form-password"
            type="password"
            name="website-lock-password"
            placeholder="Insert password..."
            autofocus
          >

          <button type="submit" class="login__form-submit">
            Unlock
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
  /**
   * @license
   * MyFonts Webfont Build ID 2927956, 2014-11-24T09:18:09-0500
   *
   * The fonts listed in this notice are subject to the End User License
   * Agreement(s) entered into by the website owner. All other parties are
   * explicitly restricted from using the Licensed Webfonts(s).
   *
   * You may obtain a valid license at the URLs below.
   *
   * Webfont: HelveticaNeueLT-Bold by Linotype
   * URL: http://www.myfonts.com/fonts/linotype/neue-helvetica/helvetica-75-bold/
   * Licensed pageviews: 500,000
   *
   * Webfont: HelveticaNeueLT-Light by Linotype
   * URL: http://www.myfonts.com/fonts/linotype/neue-helvetica/helvetica-45-light/
   * Licensed pageviews: 250,000
   *
   * Webfont: HelveticaNeueLT-Roman by Linotype
   * URL: http://www.myfonts.com/fonts/linotype/neue-helvetica/helvetica-55-roman/
   * Licensed pageviews: 250,000
   *
   *
   * License: http://www.myfonts.com/viewlicense?type=web&buildid=2927956
   * Webfonts copyright: Part of the digitally encoded machine readable outline data for producing the Typefaces provided is copyrighted &#x00A9; 1988 - 2006 Linotype GmbH, www.linotype.com. All rights reserved. This software is the property of Linotype GmbH, and may not be repro
   *
   * © 2014 MyFonts Inc
  */

  /* @import must be at top of file, otherwise CSS will not work */
  @import url("//hello.myfonts.net/count/2cad54");

  @font-face {
    font-family: 'HelveticaNeueLT-Bold';
    src: url('../assets/fonts/2CAD54_0_0.eot');
    src: url('../assets/fonts/2CAD54_0_0.eot?#iefix') format('embedded-opentype'), url('../assets/fonts/2CAD54_0_0.woff2') format('woff2'), url('../assets/fonts/2CAD54_0_0.woff') format('woff'), url('../assets/fonts/2CAD54_0_0.ttf') format('truetype');
  }

  @font-face {
    font-family: 'HelveticaNeueLT-Light';
    src: url('../assets/fonts/2CAD54_1_0.eot');
    src: url('../assets/fonts/2CAD54_1_0.eot?#iefix') format('embedded-opentype'), url('../assets/fonts/2CAD54_1_0.woff2') format('woff2'), url('../assets/fonts/2CAD54_1_0.woff') format('woff'), url('../assets/fonts/2CAD54_1_0.ttf') format('truetype');
  }

  @font-face {
    font-family: 'HelveticaNeueLT-Roman';
    src: url('../assets/fonts/2CAD54_2_0.eot');
    src: url('../assets/fonts/2CAD54_2_0.eot?#iefix') format('embedded-opentype'), url('../assets/fonts/2CAD54_2_0.woff2') format('woff2'), url('../assets/fonts/2CAD54_2_0.woff') format('woff'), url('../assets/fonts/2CAD54_2_0.ttf') format('truetype');
  }

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #f74902;
  }

  .website-lock {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    .login {
      position: relative;
      width: 100%;
      max-width: 320px;
      font-family: "HelveticaNeueLT-Bold", Helvetica, Arial, sans-serif;
    }

    .login__heading {
      font-size: 22px;
      color: #ffffff;
      margin-top: 0;
      margin-bottom: 1em;
      font-weight: 500;
    }

    .login__form {
      margin-bottom: 26px;

      &-error {
        background: #da0000;
        border-radius: 3px;
        color: #fff;
        font-size: 14px;
        padding: 10px;
        margin: 0;
        margin-bottom: 5px;
      }

      &-label {
        display: none;
      }

      &-input-wrap {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }

      &-password {
        background-color: #eaeaff;
        font-family: Helvetica, Arial, sans-serif;
        -moz-appearance: none;
        -webkit-appearance: none;
        padding: 5px 10px;
        margin: 0;
        height: 36px;
        font-size: 14px;
        border: 0;
        border-radius: 0;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        min-width: 0;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-transition: background-color 200ms ease;
        -o-transition: background-color 200ms ease;
        transition: background-color 200ms ease;
      }

      &-password:focus,
      &-password:hover {
        outline: 0;
        background-color: #ffffff;
      }

      &-submit {
        -moz-appearance: none;
        -webkit-appearance: none;
        border: 0;
        border-radius: 0;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        background-color: #232323;
        color: #ffffff;
        margin: 0;
        padding: 10px;
        height: 36px;
        -webkit-transition: background-color 200ms ease;
        -o-transition: background-color 200ms ease;
        transition: background-color 200ms ease;
        font-size: 14px;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
      }

      &-submit:focus,
      &-submit:hover {
        outline: 0;
        cursor: pointer;
        background: #101010;
      }
    }
  }
</style>

<script>
import Utilities from '../utilities/helpers'

export default {
  name: 'WebsiteLock',
  layout: 'website-lock',
  data () {
    return {
      // form data
      password: null,
      // axios settings
      apiUrl: process.env.NUXT_API_URL,
      request: null
    }
  },
  computed: {
    errors: {
      get () {
        return this.$store.state.websiteLock.errors
      },
      set (value) {
        this.$store.commit('websiteLock/setErrors', value)
      }
    }
  },
  methods: {
    sendForm () {
      if (this.$websiteLock.isServerValidationEnabled) {
        this.validateTokenOnServer()
      } else {
        this.saveToken(this.password)
      }
    },

    validateTokenOnServer () {
      const source = this.$axios.CancelToken.source()

      if (this.request) {
        source.cancel()
      }

      this.request = this.$axios
        .$get(`${this.apiUrl}/web-site-lock/token?password=${this.password}`, {
          cancelToken: source.token,
          headers: {
            Accept: 'application/json'
          }
        })
        .then((response) => {
          this.saveToken(response.token)
        })
        .catch((xhr) => {
          this.errors = Utilities.extractErrorMessagesFromXHR(xhr)
          // clear request
          this.request = null
        })
    },

    saveToken (token) {
      // clear resources
      this.errors = []
      this.request = null
      // save token to cookies
      const result = this.$websiteLock.setToken(token)

      // if wrong password, don't redirect
      if (!result) {
        this.password = null
        return
      }

      // redirect user back to where he came from
      const redirectPath = typeof this.$route.query.from !== 'undefined' ? this.$route.query.from : ''

      // since nuxt can't handle removing CSS, "hard" redirect to previous URL
      window.location = `${process.env.APP_URL}${redirectPath}`
    }
  }
}
</script>
