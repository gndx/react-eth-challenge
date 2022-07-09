function getData(endPoint) {
  return fetch(endPoint)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default getData;
