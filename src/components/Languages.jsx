import React, {useContext} from 'react';
import { Context } from '../containers/App';
import { Wrapper, Title, Texto, Name } from '../styles/GlobalStyle';
import { Grid } from '@mui/material';


const Languages = () => {
  
  const data = useContext(Context);

  return (
    <Wrapper>
      <Title className="Languages-title">Languages</Title>
      {data.languages? (
        data.languages.map((info, i) => {
          return (
            <Grid key={i}>
            <Grid className="Languages-item">
              <Title>{info.name}</Title>
              <Texto>{info.level}</Texto>
            </Grid>
            </Grid>
          );
        })
      ) : (
        <>
        <Title className={'Languages-item'}></Title>
        <Title className={'Languages-item'}></Title>
        <Title className={'Languages-item'}></Title>
      </>
      )}
    </Wrapper>
  );
};

export default Languages;
