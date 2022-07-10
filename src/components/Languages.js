import React, { useState, useEffect } from 'react';

function Languages(){
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
        console.log(response.languages);
        getData(response.languages);
      })
}



  return (
    <div>
       <h2 className="languages-title">Languages</h2>
      <article>
        <h3 className="language-item">{data[0]?.name}</h3>
        <h3 className="language-item">{data[1]?.name}</h3>
      </article>
    </div>
  )
}

export default Languages