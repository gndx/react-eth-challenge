import React, {useState, useEffect} from "react";
import { Grid } from "@mui/material";
import { Wrapper, Title, Texto } from "../../styles/components/GlobalStyle";

export const Languages = () => {
    return (
        <>
            <Wrapper>
                <Title>Languages</Title>
            <Grid container>
                <Grid item xs={4}>
                    <Texto>🇬🇧 English advanced C1</Texto>
                </Grid>
                <Grid item xs={4}>
                    <Texto>🇫🇷 French advanced C1</Texto>
                </Grid>
                <Grid item xs={4}>
                    <Texto>🇪🇸 Spanish native language</Texto>
                </Grid>
            </Grid>
            </Wrapper>
        </>
    )
}