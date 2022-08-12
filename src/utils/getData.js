const getData = (resource) => {
  return fetch(resource)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

export default getData;
