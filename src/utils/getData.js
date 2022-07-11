const getData = async (URL) => {
    try {
        const res = await fetch(URL);
        const json = await res.json()
        const data = await json.data;

        return data;

    } catch (error) {
        console.error(error.message)
    }
}

export default getData;