const getData = (url) => {
  if (!url) return 'no url provided';

  return fetch(url).then((res) => res.json());
};

export default getData;
