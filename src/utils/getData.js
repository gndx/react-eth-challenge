/* getData from "Api" */
const getData = async (url) => {
    const req = await fetch(url);
    const data = await req.json();

    return data;
}

export default getData
