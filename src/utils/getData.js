/**
 * Fetch data
 * @param {string} url to fetch
 * @returns {object} cv data
 */

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.info('An error ocurred using the API');
    console.error(err.message);
  }
};

export default getData;
