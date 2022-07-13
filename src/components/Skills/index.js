import React, { useContext } from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

import Context from '../../Context'

export default function () {
  const data = useContext(Context);

  return (
    <ContainerComponent>
      <Title>Skills</Title>
      <RowDiv>
      {
          data && data.skills ? data.skills.map((item, key) => {
            return <Item key={key}>
              <p>{item.name} ({item.percentage})</p>
            </Item>
          }) : <><Item>.Skills.item</Item><Item>.Skills.item</Item><Item>.Skills.item</Item></>
        }
      </RowDiv>
    </ContainerComponent>
  );

}
