const getData = async (url) => {
    const response = await (fetch(url));
    const res = await response.json()
    //console.log("res:",res)
    return res;
  };
  
  export default getData; 