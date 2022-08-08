async function getData (url) {
    try {
        const res = await fetch(url);
        const data = await res.json(data);
        console.log(data)
        console.log(typeof(data))
        return data;
    } catch (err) {
        error(err);
    }
}

export default getData