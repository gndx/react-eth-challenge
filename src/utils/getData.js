import axios from "axios"

export const getData = async url => {
    const promisedData = await axios.get(url);
    const data = await promisedData.data
    console.log(data)
    return data
}