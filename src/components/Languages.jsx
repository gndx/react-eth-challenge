import { Card, Descriptions, Progress } from 'antd';
import React from 'react'

const Languages = ({ languages = [] }) => (
  <Card title="Languages" className='Languages-title'>
    <Descriptions layout="vertical" column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
      {
        languages.map((item, index) =>(
          <Descriptions.Item label={item.name} key={index} className='Languages-item'>
            <Progress  percent={item.percentage.replace('%','')} steps={10}  />
          </Descriptions.Item>
        ))
      }
    </Descriptions>
  </Card>
);

export default Languages;
