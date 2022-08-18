import React, {useContext} from 'react';
import { Context } from '../containers/App';
import { Wrapper, Title, Texto, Name } from '../styles/GlobalStyle';
import { Grid } from '@mui/material';


const Skills = () => {

  const data = useContext(Context);

  return (
    <Wrapper>
      <Title className="Skills-title">Skills</Title>
      {data.skills? (
        data.skills.map((info, i) => {
          return (
            <Grid key={i}>
              <Grid className="Skills-item">
              <Texto>{info.name}</Texto>
              </Grid>
            </Grid>
          );
        })
      ) : (
        <>
          <Title className={'Skills-item'}></Title>
          <Title className={'Skills-item'}></Title>
          <Title className={'Skills-item'}></Title>
        </>
      )}
    </Wrapper>
  );
};

export default Skills;
