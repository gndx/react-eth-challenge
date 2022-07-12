const getData = (url) => {
    return fetch(url).then(response => response.json()).catch(err => {
        return 'error with url provided';
    });

  };
  
  export default getData;