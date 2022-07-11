import React, {useContext} from 'react';
import Item from './Item';
import { InfoContext } from '../containers/App';
import '../styles/components/Academic.styl';
const defaultAcademic = Array(4).fill({
  degree:"Ethereum Developer Program",
  description:"",
  endDate:"Present",
  institution:"Plati - Ethereum Fundation",
  startDate:"Jul 2022",  
});
const defaultCertificate = Array(4).fill({
  date:"2022",
  description:"Introduction to basic concepts of Web3's reaches",
  institution: "Platzi",
  name: "Web3 Fundamentals"
});
const Academic = (props) => {
  const data = useContext(InfoContext);
        const {Academic=defaultAcademic,certificate=defaultCertificate} = data;
return(
    <section>
      <div>
        <h2 className='Academic-title'>Academic</h2>
        {
          Academic.map(({
            degree,
            description,
            endDate,
            institution,
            startDate,
          }, index) => (
            <Item
              className='Academic-item'
              title={degree}
              sub={institution}
              description={description}
              date={`${startDate}-${endDate}`}
              key={`academic-${index}`}
            />
          ))
        }
      </div>
      <div>
        <h2 className='Certificate-title'>Certificates</h2>
        {
          certificate.map(({
            date,
            description,
            institution,
            name,
          }, index) => (
            <Item
              className='Certificate-item'
              title={name}
              sub={institution}
              description={description}
              date={date}
              key={`certificate-${index}`}
            />
          ))
        }
      </div>
    </section>
)};

export default Academic;