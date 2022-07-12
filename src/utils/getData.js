const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      return data;
    } catch (error) {
      console.error(error);
      return {
        error
      };
    }
  };
  
  export default getData;
  