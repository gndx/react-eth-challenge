const getData = () => {
  return fetch('http://localhost:3000/data')
    .then((data) => data.json());
};

export default getData;
