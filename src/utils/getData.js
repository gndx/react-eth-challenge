const apiUrl = 'https://google.com';

 const getData = async () => {
   return fetch(apiUrl)
     .then((res) => res.json())
     .then((data) => data)
     .catch((err) => console.log(err));
 };
 export default getData;