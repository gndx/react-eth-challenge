import React, {useContext} from 'react'
import AppContext from '../../context/AppContext';
import Content from '../../components/Content/index';


const Academic = () => {
  const data = useContext(AppContext)
  const initialContent = data.Academic ? data.Academic : [0, 1, 2]
  const academic = (dataAcademic) => {
    const { degree, institution, startDate, endDate } = dataAcademic;
    return {
      degree,
      institution,
      startDate,
      endDate
    }
  }
  return (
    <section className='Academic'>
      <h1 className='Academic-title'>Academic</h1>
      {initialContent.map((item, index) => (
        <div key={index} className="Academic-item">
          <Content data={data.Academic && academic(item)} />
        </div>
      ))}
    </section>
  )
}

export default Academic