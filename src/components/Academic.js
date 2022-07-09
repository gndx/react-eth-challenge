import React, { useState, useEffect } from 'react';

function Academic() {

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
          console.log(response.Academic);
          getData(response.Academic);
      })
}
  return (
    <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up">
      <h3 class="resume-title">Education</h3>
      <div class="resume-item">
        <h4>Certified Tech developer</h4>
        <h5>2021 - Currently</h5>
        <p><em>Digital House</em></p>
        <p></p>
      </div>
      <div class="resume-item">
        <h4>Diploma in Programming - Scholarship</h4>
        <h5>2021 - 2021</h5>
        <p><em>Ministry of communications, Bogota, Colombia</em></p>
        <p></p>
      </div>
      <div class="resume-item">
        <h4>{data[0]?.degree}</h4>
        <h5>2014 - 2019</h5>
        <p><em>{data[0]?.institution}</em></p>
        <p></p>
      </div>
      <div class="resume-item">
        <h4>{data[1]?.degree}</h4>
        <h5>2016 - 2021</h5>
        <p><em>{data[1]?.institution}</em></p>
        <p></p>
      </div>
    </div>
  )
}

export default Academic