const getData = async (url = 'https://google.com') => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    return response;
  } catch (error) {
    return null;
  }
};

export default getData;
