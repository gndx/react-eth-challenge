import { Card, Descriptions, Progress } from 'antd';
import React from 'react'

const About = ({ skills = [] }) => (
  <Card title="Skills" className='Skills-title' style={{height: '100%'}}>
    <Descriptions layout="vertical" column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
      {
        skills.map((item, index) =>(
          <Descriptions.Item label={item.name} key={index} className='Skills-item'>
            <Progress  percent={item.percentage.replace('%','')} steps={5} />
          </Descriptions.Item>
        ))
      }
    </Descriptions>
  </Card>
);

export default About;
