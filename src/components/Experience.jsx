import { Grid } from '@mui/material';
import React, {useContext} from 'react';
import { Context } from '../containers/App';
import { Wrapper, Title, Texto, Name } from '../styles/GlobalStyle';


const Experience = () => {
  
  const data = useContext(Context);

  return (
    <Wrapper>
      <Title className='Experience-title'>Experience</Title>
          {data.experience? (
            data.experience.map((info, i) => {
              return (
                <Grid container key={i}>
                  <Grid className="Experience-item">
                      <Grid>
                        <Title>{info.jobTitle}</Title>
                        <Texto>{info.company}</Texto>
                        <Texto>{info.jobDescription}</Texto>
                        <Texto>{info.startDate}-{info.endDate}</Texto>
                      </Grid>
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <>
              <Name className={'Experience-item'}></Name>
              <Name className={'Experience-item'}></Name>
              <Name className={'Experience-item'}></Name>
            </>
          )}
    </Wrapper>
  );
};

export default Experience;
