const getData = (url = 'https://react-eth-ai5nk6yax-josevsalina.vercel.app/cv') => {
  return fetch(url)
    .then(data => data.json())
    .then(data=> useResult(data))
}

module.exports = getData
