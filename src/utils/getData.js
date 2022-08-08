async function getData (url) {
    try {
        const res = await fetch(url);
        const data = await res.json(data);
        return data;
    } catch (err) {
        error(err);
    }
}

export default getData