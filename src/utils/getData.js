const getData = async (url) => {
  return fetch(url)
    .then((body) => body.json());
};

export default getData;
