const API = 'https://my-json-server.typicode.com/cacosted/cv-data/data';

function getData() {
  return fetch(API)
    .then((response) => response.json())
    .then((data) => data);
}

export default getData;
