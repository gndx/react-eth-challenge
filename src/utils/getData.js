const getData = async (url) => {
  try {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export default getData
