import React from 'react'
import styled from 'styled-components';

const Profile = ({ profile }) => {
  return (
    <ProfileContainer>
      <Title className='Profile-title'>Who am I?</Title>
      <Description className='Profile-desc'>{profile}</Description>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  margin: 0 20px 20px;
  padding: 0 20px 20px;
`;

const Title = styled.h2`
  color: #1f1f1f;
  margin: 0 0 10px;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  color: #1d1d1d;
`;

export default Profile;
