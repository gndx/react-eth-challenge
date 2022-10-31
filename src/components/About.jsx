import React, {useContext} from "react";
import { Context } from "../containers/App";
import { Wrapper, Title, Texto, Name } from '../styles/GlobalStyle';
import { Grid } from "@mui/material";

const About = () => {

  const data = useContext(Context);

  return (
    <>
      <Title className="About-title"></Title>
      <Grid item xs={4}>
        <Texto className="About-item">✉️ {data.email}</Texto>
      </Grid>
      <Grid item xs={4}>
          <Texto className="About-item">🔗 {data.website}</Texto>
      </Grid>
      <Grid item xs={4}>
          <Texto className="About-item">📍 {data.address}</Texto>
      </Grid>
    </>
  );
};

export default About;
