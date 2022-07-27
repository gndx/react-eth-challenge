const getData = (url) => {
  if (!url) return 'No url was provided';
  return fetch(url)
    .then((res) => res.json());
};

export default getData;
