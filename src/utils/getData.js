async function getData() {
    let url = 'http://localhost:3000/data';
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export default getData;