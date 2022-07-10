import React, { useState, useEffect } from 'react';

function Experience(){
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
          console.log(response.experience);
          getData(response.experience);
      })
}

  return (
    <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>{data[0]?.jobTitle}</h4>
              <h5>2021 - Present</h5>
              <p><em>Bogota, Colombia</em></p>
              <ul>
                <li>{data[0]?.jobDescription}</li>
                <li>Creating an automated framework using Rest Assure for API responses</li>
                <li>Creating an automated framework using Chai-Mocha for testing responses through Postman</li>
                <li>Finding bugs in the API services in the stage environment</li>
                <li>Updating the new fixes and services through GitHub in the stage environment</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>{data[1]?.jobTitle}</h4>
              <h5>2021</h5>
              <p><em>Bogota, Colombia</em></p>
              <ul>
                <li>{data[1]?.jobDescription}</li>
                <li>Support customer via chat with information required about the software</li>
                <li>Give request to tickets created by customer solving their issues with the software</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Customer Service Bilingual Agent</h4>
              <h5>2020 - 2021</h5>
              <p><em>Bogota, Colombia</em></p>
              <ul>
                <li>Employed expert problem solving and communication skills as a bilingual agent</li>
                <li>Displayed strong multitasking and fast learning skills</li>
                <li>Handled new software with ease.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Reservoir development management intern</h4>
              <h5>2018 - 2018</h5>
              <p><em>Bogota, Colombia</em></p>
              <ul>
                <li>Support at the area of inspection with all the procedures and paper work related to the revision of ministerial forms of production, operational forms and any other type of communication from companies</li>
                <li>Develop a project to update ministerial forms of production</li>
                <li>Updat the data base of measurement department</li>
                <li>Give respond to different incoming communication</li>
              </ul>
            </div>
          </div>
  )
}

export default Experience