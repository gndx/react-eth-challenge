import React, { useState, useEffect } from 'react';

function Interest(){
  const [data, getData] = useState([]);
  const url="https://mocki.io/v1/d778915e-e378-4904-b13b-2a826bf5d5fd"
  useEffect(() => {
    fetchData()
}, [])


const fetchData = () => {
  fetch(url)
      .then((res) =>
          res.json())

      .then((response) => {
          console.log(response.interest);
          getData(response.interest);
      })
}

  return (
    <div>
      <h2 className="Interest-title">Interest</h2>
      <article>
        <h3 className="Interest-item">{data[0]}</h3>
        <h3 className="Interest-item">{data[1]}</h3>
        <h3 className="Interest-item">{data[2]}</h3>
        <h3 className="Interest-item">{data[3]}</h3>
        <h3 className="Interest-item">{data[4]}</h3>
      </article>
    </div>
  )
}

export default Interest