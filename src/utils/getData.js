const getData = async (url) => {
  const res = await fetch(url);
  const json = res.json();
  return json;
};

export default getData;
