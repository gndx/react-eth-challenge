import { Card, Divider, List } from 'antd';
import React from 'react'

const { Meta } = Card;

const Academic = ({ Academic = [] }) => (
  <Card className='Academic-title' title="Academic">
    <List
      grid={{
        gutter: 18,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={Academic}
      renderItem={item => (
        <List.Item>
          <Card
            actions={
              [
                <div>Start: {item.startDate}</div>,
                <div>End: {item.endDate}</div>
              ]
            }
          >
            <Meta className='Academic-item' title={item.degree} description={item.institution} />
            <Divider />
            <div>{item.description}</div>
          </Card>
        </List.Item>
      )}
    />
  </Card>
);

export default Academic;
