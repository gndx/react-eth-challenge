import React from 'react';

import { Title, Item } from './styles';
import { ContainerComponent, RowDiv } from '../../styles/components';

export default function () {
  return (
    <ContainerComponent>
      <Title>.Languages.title</Title>
      <RowDiv><Item>.Languages.item</Item><Item>.Languages.item</Item><Item>.Interest.item</Item></RowDiv>
    </ContainerComponent>
  );

}
