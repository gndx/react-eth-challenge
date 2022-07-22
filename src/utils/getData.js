const getData = URL => {
    return fetch(URL)
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.error(e))
};

export default getData; 