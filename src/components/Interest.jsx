import { Card, Tag } from 'antd';
import React from 'react'

const Interest = ({ interest = [] }) => (
  <Card title="Interest" className='Interest-title' style={{height: '100%'}}>
    {
      interest.map((item, index) =>(
        <Tag className='Interest-item' color="#108ee9" key={index}>{item}</Tag>
      ))
    }
  </Card>
);

export default Interest;
