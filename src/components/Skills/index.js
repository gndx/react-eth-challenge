import React from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

export default function () {
  return (
    <ContainerComponent>
      <Title>.Skills.title</Title>
      <RowDiv>
        <Item>.Skills.item</Item>
        <Item>.Skills.item</Item>
      </RowDiv>
      <Item>.Skills.item</Item>
    </ContainerComponent>
  );

}
