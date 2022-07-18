const getData = (url) => {
    if (!url) return 'Url no ingresada';
        return fetch(url).then((res) = res.json());
};
export default getData;