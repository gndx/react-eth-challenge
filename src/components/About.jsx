import { Descriptions, Typography } from 'antd';
import React from 'react'

const { Text } = Typography;

const About = ({phone, email, website, address}) => (
  <Descriptions style={{maxWidth: 800}}>
    <Descriptions.Item className='About-item' ><Text type="secondary">{phone}</Text></Descriptions.Item>
    <Descriptions.Item className='About-item'><Text type="secondary">{ email }</Text></Descriptions.Item>
    <Descriptions.Item className='About-item'><Text type="secondary">{ website }</Text></Descriptions.Item>
    <Descriptions.Item className='About-item'><Text type="secondary">{ address }</Text></Descriptions.Item>
  </Descriptions>
);

export default About;
