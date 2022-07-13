import React, { useContext } from 'react';

import { Title, Avatar } from './styles';
import { ContainerComponent, ColumnDiv } from '../../styles/components';
import Context from '../../Context';

export default function ({ children }) {
  const data = useContext(Context);
  return (
    <ContainerComponent backgroundColor='#c2e6f9' orientation='row' fullWidth>
      <Avatar src={data ? data.avatar : 'https://via.placeholder.com/150'} />
      <ColumnDiv>
        <Title>{data ? data.name  : '.Header-title'}</Title>
        {children}
      </ColumnDiv>
    </ContainerComponent>
  );

};
