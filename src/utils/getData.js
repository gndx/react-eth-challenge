const getData = async (url, options = {}) => {
  return fetch(url, options)
    .then((res) => res.json())
    .then((response) => {
      if (!Array.isArray(response) && Object.keys(response).length === 0) {
        throw new Error('Empty Response');
      }

      return response;
    });
};

export default getData;
