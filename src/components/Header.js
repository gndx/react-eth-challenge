import React, { useState, useEffect } from 'react';


function Header() {
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
          console.log(response);
          getData(response);
      })
}


  return (
    <header className="header__desc">
      <h1 className="header__title"><span className="text">{data.name}</span> {data.lastName}</h1>
      <h2 className="header__project">{data.profession} &#128513;</h2>
      <h4 className="header__phone">&#128241; phone: +57 {data.phone}</h4>
      <h4 className="header__email">&#128232; email: {data.email}</h4>
      <h4 className="header__website">&#127758; website: {data.website}</h4>
    </header>
  )
}

export default Header
