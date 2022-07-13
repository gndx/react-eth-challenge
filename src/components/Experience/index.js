import React from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

export default function () {
  return (
    <ContainerComponent fullWidth>
      <Title>.Experience.title</Title>
      <RowDiv>
        <Item>.Experience.item</Item>
        <Item>.Experience.item</Item>
      </RowDiv>
      <RowDiv>
        <Item>.Experience.item</Item>
        <Item>.Experience.item</Item>
      </RowDiv>
    </ContainerComponent>
  );

}
