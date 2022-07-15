
const getData = async (url) => {
  const res = await fetch(url);
  return res.json();
};

export default getData;
