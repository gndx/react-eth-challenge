import React, { useState, useEffect } from 'react';

function Skills() {
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
          console.log(response.skills);
          getData(response.skills);
      })
}


  return (
<section id="skills" class="skills section-bg">
      <div class="container_skill">

        <div class="section-title">
          <h2>Skills</h2>
          <p>I'm currently studying and creating web portals through different frameworks

          Continually learning and acquiring new skills based on current and future technological demands and trends in the field of web application design and development in general..</p>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up">

            <div class="progress siete">
              <span class="skill">{data[0]?.name} <i class="val">{data[0]?.percentage}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress siete">
              <span class="skill">{data[1]?.name} <i class="val">{data[1]?.percentage}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress cinco">
              <span class="skill">{data[2]?.name} <i class="val">{data[2]?.percentage}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

            <div class="progress siete">
              <span class="skill">{data[3]?.name} <i class="val">{data[3]?.percentage}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress seis">
              <span class="skill">{data[4]?.name} <i class="val">{data[4]?.percentage}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ></div>
              </div>
            </div>
          </div>

        </div>

        <div class="section-title">
          <h2>Frameworks</h2>
            <div class="progress cinco">
              <span class="skill">{data[5]?.name}<i class="val">{data[5]?.percentage}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div>
              </div>
            </div>

            <div class="progress cinco">
              <span class="skill">{data[6]?.name}<i class="val">{data[6]?.percentage}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ></div>
              </div>
            </div>

              <div class="progress cuatro">
              <span class="skill">{data[7]?.name}<i class="val">{data[6]?.percentage}</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" ></div>
              </div>
            </div>

        </div>

      </div>
    </section>
  )
}

export default Skills