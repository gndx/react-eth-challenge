
export const getData = async (url) => {
    try {
        let res = await fetch(url)
        return await res.json()
    } catch (e) {
        console.error(e)
    }

    return null
}

export default getData