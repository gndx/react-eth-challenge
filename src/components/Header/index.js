import React from "react";
import {Grid} from '@mui/material';
import { Wrapper, Title } from "../../styles/components/GlobalStyle";

export const Header = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={6} md={4}>
                    <item>
                        <Wrapper>
                            <Title>Photo</Title>
                        </Wrapper>
                    </item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Wrapper>
                        <Title>Header</Title>
                    </Wrapper>
                </Grid>
            </Grid>
        </>
    )
}
