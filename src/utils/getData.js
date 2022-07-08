const getData = async (url = 'http://localhost:3000/data') => {
  const response = await (fetch(url));
  return response.json();
};

export default getData;
