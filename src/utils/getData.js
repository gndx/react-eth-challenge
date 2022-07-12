export const getData = async (url) => {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching data');
    }
  } catch (error) {
    console.log(error);
  }
};
