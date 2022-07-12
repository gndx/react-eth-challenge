// async function getData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.info('An error ocurred using the API');
//     console.error(err.message);
//   }
// }

// export default getData;
const getData = (url) => {
  if (!url) return 'no url provided';

  return fetch(url).then((res) => res.json());
};

export default getData;
