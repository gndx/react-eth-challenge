function getData(endPoint) {
  return fetch(endPoint)
    .then((res) => res.json());
}

export default getData;
