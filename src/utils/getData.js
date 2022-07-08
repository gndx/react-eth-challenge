export const getData = async (url = 'http://localhost:3000/data') => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Can not get data');
  }
};

export default getData;
