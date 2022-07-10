const getData = async (URL) => {
    try {
        const res = await fetch(URL);
        const data = await res.json()
    
        return data;

    } catch (error) {
        console.error(error.message)
    }
}

export default getData;