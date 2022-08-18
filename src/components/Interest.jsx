import { Grid } from '@mui/material';
import React, {useContext} from 'react';
import { Context } from '../containers/App';
import { Wrapper, Title, Texto, Name } from '../styles/GlobalStyle';


const Interest = () => {
  
  const data = useContext(Context);

  return (
    <Wrapper>
      <Title className="Interest-title">Interest</Title>
      {data.interest? (
        data.interest.map((info, i) => {
          return (
            <Grid key={i}>
              <Grid className="Interest-item">
                <Texto>{info.name}</Texto>
              </Grid>
            </Grid>
          );
        })
      ) : (
        <>
        <Title className={'Interest-item'}></Title>
        <Title className={'Interest-item'}></Title>
        <Title className={'Interest-item'}></Title>
      </>
      )}
    </Wrapper>
  );
};

export default Interest;
