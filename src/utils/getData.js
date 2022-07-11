const getData = async (url) => {
    const response = await (fetch(url));
    const res = await response.json()
    return res;
  };
  
  export default getData; 