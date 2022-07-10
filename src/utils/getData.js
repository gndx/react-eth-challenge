const getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data.data) {
        throw new Error('No data found');
      }

      return data.data;
    });
};

export default getData;
