import { Avatar, Card} from 'antd';
import React from 'react'

const { Meta } = Card;

export const Header = ({children, name, avatar, profession}) => (
    <Card>
      <Meta
        className='Header-title'
        avatar={<Avatar size={64} src={avatar} />}
        title={name}
        description={ <><span>{profession}</span> {children}</>}
      />
    </Card>
);
