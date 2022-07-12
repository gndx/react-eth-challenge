import React from 'react'
import { Title } from '../styles/components/Experience'

const Experience = () => {
  return (
    <div>
      <Title className='Experience-title'></Title>
      <div className='Experience-item'>
        <h4>Smart Contract Dev</h4>
        <p>Freelance
              Oct 2021 - present· remote</p>
      </div>
      <div className='Experience-item'>
        <h4>Project Manager</h4>
        <p>TriUnico · Permanent
            Mar 2020 - Jun 2021 · 1 yr 4 mos</p>
      </div>
      <div className='Experience-item'>
        <h4>Pasante en el área de Potencia-Control</h4>
        <p>Empresas Polar · InternshipEmpresas Polar · Internship
              Oct 2018 - Feb 2019 · 5 mosOct 2018 - Feb 2019 · 5 mos
              San Joaquín, Carabobo, Venezuela</p>
      </div>
    </div>

  )

}
export default Experience;