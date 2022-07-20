const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
};

export default getData;
