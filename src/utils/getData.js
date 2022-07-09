const getData = async (urlApi = 'https://mock-api1.herokuapp.com/developer') => {
  let data = {};
  await fetch(urlApi, {
    method: 'GET',
  }).then((res) => res.json())
    .then((vdata) => {
      data = vdata;
    }).catch((error) => console.log(error.responseText));

  return data;
};

export default getData;
