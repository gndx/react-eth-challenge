const getData = (url) => 
    fetch(url)
    .then(response => {
        if(response.ok) return response.json()

        throw new Error(`Oops. Something went wrong with ${url}`);
    })
    .catch(error => {throw new Error(error);})

export default getData;