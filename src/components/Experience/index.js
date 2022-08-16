import React from "react";
import { Wrapper, Title, Texto } from "../../styles/components/GlobalStyle";
import {Grid} from '@mui/material';


export const Experience = () => {
    return (
        <Wrapper>
            <Title>Experience</Title>
            <Grid container>
                <Grid item xs={6}>
                        <Texto>fgdsgsfdg</Texto>
                        <Texto>fgdsgsfdg</Texto>
                </Grid>
                <Grid item xs={6}>
                        <Texto>fgdsgsfdg</Texto>
                        <Texto>fgdsgsfdg</Texto>
                </Grid>
            </Grid>
        </Wrapper>
    )
}