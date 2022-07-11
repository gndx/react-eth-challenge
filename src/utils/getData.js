const getData = async (URL) => {
    try {
        const res = await fetch(URL);
        const json = await res.json()
    
        return json;

    } catch (error) {
        console.error(error.message)
    }
}

export default getData;