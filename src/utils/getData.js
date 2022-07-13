const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error at fetching data');
    }
  } catch (error) {
    console.log(error);
  }
};

export default getData;
