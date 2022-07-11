const getData = async (url) => {
  try {
    const res = await fetch(url, { cors: true });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getData;
