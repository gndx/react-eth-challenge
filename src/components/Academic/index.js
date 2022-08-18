import React, {useState, useEffect} from "react";
import { Wrapper, Title, Texto } from "../../styles/components/GlobalStyle";
import {Grid} from '@mui/material';


export const Academic = () => {

    return (
        <Wrapper>
            <Title>Academic</Title>
            <Grid container>
                <Grid item xs={12}>
                        <Texto>gbfdshfd</Texto>
                        <Texto>fgdsgsfdg</Texto>
                </Grid>
                <Grid item xs={12}>
                        <Texto>fgdsgsfdg</Texto>
                        <Texto>fgdsgsfdg</Texto>
                </Grid>
            </Grid>
        </Wrapper>
    )
}