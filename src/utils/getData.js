const getData = (url) => fetch(url)
  .then((response) => response.json());

export default getData;
