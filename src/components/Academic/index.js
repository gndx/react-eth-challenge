import React from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

export default function () {
  return (
    <ContainerComponent>
      <Title>.Academic.title</Title>
      <RowDiv>
        <Item>.Academic.item</Item>
        <Item>.Academic.item</Item>
      </RowDiv>
      <Item>.Academic.item</Item>
    </ContainerComponent>
  );

}
