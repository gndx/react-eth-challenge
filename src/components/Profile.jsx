import { Card } from 'antd';
import React from 'react'

const { Meta } = Card;

const Profile = ({Profile}) => (
  <Card className='Profile-title'>
    <Meta
      title="Profile"
      description={Profile}
      className='Profile-desc'
    />
  </Card>
);

export default Profile;
