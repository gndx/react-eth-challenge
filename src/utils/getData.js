const getData = (api) => {
    if (!api) return 'No found';
  
    return fetch(api)
      .then((res) => res.json());
  };
  
  export default getData;