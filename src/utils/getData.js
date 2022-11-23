const getData = (url = 'https://react-eth-api.vercel.app/cv') => {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => data);
};

module.exports = getData;
