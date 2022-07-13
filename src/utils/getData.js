// import axios from 'axios'

// export const getData = (url) => {
//     return axios.get(url)
//     .then(res => res)
//     .catch(err => console.log(err))
// }

export const getData = (url) => {
    return fetch(url)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err))
}