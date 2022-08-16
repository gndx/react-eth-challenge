import { Grid } from "@mui/material";
import React from "react";
import { Wrapper, Title, Texto } from "../../styles/components/GlobalStyle";

export const Languages = () => {
    return (
        <>
            <Wrapper>
                <Title>Languages</Title>
            <Grid container>
                <Grid xs={3}>
                    <Texto>fdsafas</Texto>
                </Grid>
                <Grid xs={3}>
                    <Texto>fdsafas</Texto>
                </Grid>
                <Grid xs={3}>
                    <Texto>fdsafas</Texto>
                </Grid>
            </Grid>
            </Wrapper>
        </>
    )
}