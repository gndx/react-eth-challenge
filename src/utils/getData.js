const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
};
export default getData;
