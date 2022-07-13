import React, { useContext } from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

import Context from '../../Context'

export default function () {
  const data = useContext(Context);
  return (
    <ContainerComponent>
    <Title>Academic</Title>
    <RowDiv>
      {
        data && data.academic ? data.academic.map((item, key) => {
          return <Item key={key}>
            <p>{item.degree} ({item.startDate} - {item.endDate})</p>
            <ul>
              <li>{item.institution}</li>
              <li>{item.description}</li>
            </ul>
          </Item>
        }) : <><Item>.Academic.item</Item><Item>.Academic.item</Item><Item>.Academic.item</Item></>
      }
    </RowDiv>
    </ContainerComponent>
  );

}
