import React, { useContext }  from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

import Context from '../../Context'

export default function () {
  const data = useContext(Context);
  return (
    <ContainerComponent fullWidth>
      <Title>Experience</Title>
      <RowDiv>
        {
          data && data.experience ? data.experience.map((item, key) => {
            return <Item key={key}>
              <p>{item.company} ({item.startDate} - {item.endDate})</p>
              <ul>
                <li>{item.jobTitle}</li>
              </ul>
            </Item>
          }) : <><Item>.Experience.item</Item><Item>.Experience.item</Item><Item>.Experience.item</Item></>
        }
      </RowDiv>
    </ContainerComponent>
  );

}
