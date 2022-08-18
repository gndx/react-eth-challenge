import React, {useState, useEffect} from "react";
import { Grid } from "@mui/material";
import { Wrapper, Title, Texto } from "../../styles/components/GlobalStyle";

export const Interest = () => {
    return (
        <Wrapper>
            <Title>Interests</Title>
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