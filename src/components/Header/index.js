import React from 'react';

import { Title, Avatar } from './styles';
import { ContainerComponent, ColumnDiv } from '../../styles/components';

export default function (props) {
  const { children } = props;
  return (
    <ContainerComponent backgroundColor='#c2e6f9' orientation='row' fullWidth>
      <Avatar src='https://arepa.s3.amazonaws.com/melissa.jpg' />
      <ColumnDiv>
        <Title>.Header-title</Title>
        {children}
      </ColumnDiv>
    </ContainerComponent>
  );

}
