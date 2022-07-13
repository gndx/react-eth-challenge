import React, { useContext }  from 'react';

import { Title, ProfileDesc } from './styles';
import { ContainerComponent } from '../../styles/components';

import Context from '../../Context'

export default function () {
  const data = useContext(Context);
  
  return (
    <ContainerComponent fullWidth>
      <Title>Profile</Title>
      <ProfileDesc>{data ? data.profile  : '.Profile-desc'}</ProfileDesc>
    </ContainerComponent>
  );

}
