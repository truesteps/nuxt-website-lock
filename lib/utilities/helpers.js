export default {
  extractErrorMessagesFromXHR: (xhr) => {
    if (typeof xhr.message === 'undefined') {
      console.log('Request aborted');
      return [];
    }

    const hasResponseData = typeof xhr.response !== 'undefined' && typeof xhr.response.data !== 'undefined';

    if (hasResponseData && typeof xhr.response.data.errors !== 'undefined') {
      const errors = [];

      xhr.response.data.errors.forEach((error) => {
        errors.push(error);
      });

      return errors;
    } else if (hasResponseData && typeof xhr.response.data.message !== 'undefined') {
      return [xhr.response.data.message];
    }

    console.error(xhr);
    return [xhr.message];
  },
};
