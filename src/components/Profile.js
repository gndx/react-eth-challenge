import React, { useState, useEffect } from 'react';

function Profile(){
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
    <div className="about__intro">
      <h1 className="about__title">{data.profession}</h1>
      <h3 className="about__desc">{data.Profile}</h3>
    </div>
  )
}

export default Profile