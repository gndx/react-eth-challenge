export const getData = async (url = 'http://localhost:3000/data') => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error('Can not get data');
  }
};

export default getData;
