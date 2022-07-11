// Funcion que trae la data de un endpoint mediante un fetch
// TODO -> Seguridad xD
const getData = (url) => {
    return fetch(url)
           .then(rs => rs.json())
           .then(data => data)
           .catch(err => console.log(err))
};

export default getData;