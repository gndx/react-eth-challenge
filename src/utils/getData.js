const getData = async (apiUrl) => {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

 export default getData;
 