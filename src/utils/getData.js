const getData = (URL) => {
    if (!URL) {
        return "No connexion"
    }
    return fetch(URL).then(
        (resp) => resp.json()
    );
}

export default getData;