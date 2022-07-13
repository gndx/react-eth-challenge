import React, { useContext } from 'react';

import { Title, Item } from './styles';
import { RowDiv, ColumnDiv } from '../../styles/components';

import Context from '../../Context'

export default function () {
  const data = useContext(Context);

  return (
    <ColumnDiv>
      <Title>{data ? data.profession  : '.Header-job-title'}</Title>
      <RowDiv>
        <Item>Phone: {data ? data.phone  : '.Header-phone'}</Item>
        <Item>{data ? data.email  : '.Header-email'}</Item>
        <Item>{data ? data.website  : '.Header-website'}</Item>
      </RowDiv>
    </ColumnDiv>
  );
}
