<template>
  <div>
    Works!

    <button type="button" @click.prevent="testAxios">
      Test axios
    </button>
  </div>
</template>

<script>
export default {
  middleware: ['WebsiteLock'],
  methods: {
    testAxios () {
      this.$axios.$get('/web-site-lock/token/validate')
        .then(() => {
          alert('IT WORKS!')
        })
        .catch(() => {
          alert('IT BORKED :(')
        })
    }
  }
}
</script>
