
const getData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } 
    catch(err) {
        console.log(err);
    }
};

export default getData;
  