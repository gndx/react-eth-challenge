import React, {useContext} from 'react';
import { Context } from '../containers/App';
import { Wrapper, Title, Texto, Name } from '../styles/GlobalStyle';


const Profile = () => {
  
  const data = useContext(Context);

  return (
    <Wrapper>
      <Title className="Profile-title">Profile</Title>
      <Texto className="Profile-desc">{data.profile}</Texto>
    </Wrapper>
  );
};

export default Profile;
