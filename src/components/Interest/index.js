import React, { useContext } from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

import Context from '../../Context'

export default function () {
  const data = useContext(Context);

  return (
    <ContainerComponent>
      <Title>Interest</Title>
      <RowDiv>
      {
          data && data.interest ? data.interest.map((item, key) => {
            return <Item key={key}>
              <p>{item}</p>
            </Item>
          }) : <><Item>.Interest.item</Item><Item>.Interest.item</Item><Item>.Interest.item</Item></>
        }
      </RowDiv>
    </ContainerComponent>
  );

}
