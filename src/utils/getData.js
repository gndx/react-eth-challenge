
const getData = async (path) => {

  return fetch(path)
    .then((response) => response.json())
    .then((data) => data);

}


export default getData;