function getData(apiUrl) {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data);
}

export default getData;
