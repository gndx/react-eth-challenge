const getData = (url) => {
  if (!url) return 'No api Url';
  return fetch(url).then((res) => res.json());
};

export default getData;