import React, { useContext } from 'react';
import { Context } from '../containers/App';
import { Wrapper, Title, Texto, Name } from '../styles/GlobalStyle';
import { Grid } from '@mui/material';

const Academic = () => {
  const data = useContext(Context);

  return (
    <Wrapper>
      <Title className="Academic-title">Academic</Title>
      {data.academic ? (
        data.academic.map((info, i) => {
          return (
            <Grid key={i}>
              <Grid className="Academic-item">
                <Title>{info.degree}</Title>
                <Texto>Description: {info.description}</Texto>
                <Texto>Institution: {info.institution}</Texto>
                <Texto>End date: {info.endDate}</Texto>
              </Grid>
            </Grid>
          );
        })
      ) : (
        <>
          <Title className={'Academic-item'}></Title>
          <Title className={'Academic-item'}></Title>
          <Title className={'Academic-item'}></Title>
        </>
      )}
    </Wrapper>
  );
};

export default Academic;
