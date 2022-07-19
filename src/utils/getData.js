const getData = async (url) => {
    return fetch(url)
      .then(body => body.json())
      .catch(error => console.log(error));
  };
  
  export default getData;