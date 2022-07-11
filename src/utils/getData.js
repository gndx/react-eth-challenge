import { useEffect, useState } from 'react';

const getData = () => {
  const [result, useResult] = useState({})

  useEffect(function () {
    fetch('https://react-eth-ai5nk6yax-josevsalina.vercel.app/cv')
      .then(data => data.json())
      .then(data=> useResult(data))
  }, [])

  return { result }

}

module.exports = getData
