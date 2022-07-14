const apiUrl = 'https://resume-api-ruizalonso.vercel.app/';

const getData = () => {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));
};
export default getData;
