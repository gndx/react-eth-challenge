import React from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

export default function () {
  return (
    <ContainerComponent>
      <Title>.Interest.title</Title>
      <RowDiv>
        <Item>.Interest.item</Item>
        <Item>.Interest.item</Item>
      </RowDiv>

      <Item>.Interest.item</Item>
    </ContainerComponent>
  );

}
