import React from 'react';

import { Title, ProfileDesc } from './styles';
import { ContainerComponent } from '../../styles/components';

export default function () {
  return (
    <ContainerComponent fullWidth>
      <Title>.Profile-title</Title>
      <ProfileDesc>.Profile-desc</ProfileDesc>
    </ContainerComponent>
  );

}
