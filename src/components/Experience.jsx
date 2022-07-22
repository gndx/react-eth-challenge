import { Card, Steps, Typography } from 'antd';
import React from 'react'

const { Step } = Steps;
const { Paragraph, Title, Text } = Typography;

const Experience = ({ experience = [] }) => (
  <Card title="Experience" className='Experience-title'>
    <Steps progressDot current={0} >
      {
        experience.map((item, index) => (
          <Step className='Experience-item'
            key={index}
            title={item.company} 
            description={
            <>
              <Typography>
                <Text code style={{ fontSize: '10px'}}>{item.startDate} - {item.endDate}</Text>
                <Title level={5}>{item.jobTitle}</Title>
                <Paragraph style={{textAlign: 'left', fontSize: '11px'}}>{item.jobDescription}</Paragraph>                
              </Typography>
            </>
            }
          />
        ))
      }
    </Steps>
  </Card>
);

export default Experience;
