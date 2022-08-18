import { Grid } from '@mui/material';
import React, {useContext} from 'react'
import { Context } from '../containers/App';
import { Wrapper, Title, Texto, Name } from '../styles/GlobalStyle';

const Certificate = () => {

    const data = useContext(Context);

    return (
        <Wrapper>
          <Title className="Certificate-title">Certificates</Title>
          {data.certificate? (
            data.certificate.map((info, i) => {
              return (
                <Grid key={i}>
                  <Grid className="Certificate-item">
                    <Title>{info.name}</Title>
                    <Texto>Description: {info.description}</Texto>
                    <Texto>Institution: {info.institution}</Texto>
                    <Texto>Date: {info.date}</Texto>
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
}

export default Certificate