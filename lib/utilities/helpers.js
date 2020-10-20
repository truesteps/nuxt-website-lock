export default {
  extractErrorMessagesFromXHR: (xhr) => {
    if (typeof xhr.message === 'undefined') {
      /* eslint-disable */
      console.log('Request aborted')
      /* eslint-enable */
      return []
    }

    const hasResponseData = typeof xhr.response !== 'undefined' && typeof xhr.response.data !== 'undefined'

    if (hasResponseData && typeof xhr.response.data.errors !== 'undefined') {
      const errors = []

      xhr.response.data.errors.forEach((error) => {
        errors.push(error)
      })

      return errors
    } else if (hasResponseData && typeof xhr.response.data.message !== 'undefined') {
      return [xhr.response.data.message]
    }

    /* eslint-disable */
    console.error(xhr)
    /* eslint-enable */
    return [xhr.message]
  }
}
