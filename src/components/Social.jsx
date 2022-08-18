import { Grid } from '@mui/material';
import React, {useContext} from 'react';
import { Context } from '../containers/App';
import { Wrapper, Title, Texto, Name } from '../styles/GlobalStyle';

const Social = () => {

  const data = useContext(Context)

  return (
    <Wrapper>
      <Title>Social Media</Title>
      {data.social? (
        data.social.map((info, i) => {
          return (
            <ul key={i}>
            <Grid>
             <Texto>{info.name}</Texto>
             <Texto>{info.url}</Texto>
            </Grid>
            </ul>
          );
        })
      ) : (
        <>
        </>
      )}
    </Wrapper>
  );
};

export default Social;
