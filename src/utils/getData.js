const getData = (url) => {
  if (!url) return 'no url';

  return fetch(url)
    .then((response) => response.json());
};

export default getData;
