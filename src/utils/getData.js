
const getData = async (url = 'http://localhost:3000/data') => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getData;
