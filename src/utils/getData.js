const getData = async (url = 'http://localhost:3000/data/') => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error('Failed Call');
  }
};

export default getData;
