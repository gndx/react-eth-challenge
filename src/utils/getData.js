async function getData() {
    let url = 'https://my-json-server.typicode.com/0xiroh/react-eth-challengeZ';
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export default getData;