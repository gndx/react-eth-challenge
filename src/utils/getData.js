const getData = async (url) => {
  if (process.env.LOCAL_DATA) {
    console.log('date',Promise.resolve('../../data.json'))
    return Promise.resolve('../../data.json');
  }
  return fetch(url)
    .then((body) => body.json());
};

export default getData;
