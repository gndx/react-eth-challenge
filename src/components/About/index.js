import React from 'react';

import { Title, Item } from './styles';
import { RowDiv, ColumnDiv } from '../../styles/components';

export default function () {
  return (
    <ColumnDiv>
      <Title>.Header-job-title</Title>
      <RowDiv>
        <Item>.Header-phone</Item>
        <Item>.Header-email</Item>
        <Item>.Header-website</Item>
      </RowDiv>
      <Item>.Header-address</Item>
    </ColumnDiv>
  );
}
