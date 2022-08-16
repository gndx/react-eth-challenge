import React from "react";
import {Grid} from '@mui/material';
import { Image, Wrapper, Texto, Name } from "./styles";

const DEFAULT_IMAGE = 'https://media-exp1.licdn.com/dms/image/C4D03AQHo3s0BEAiVAw/profile-displayphoto-shrink_800_800/0/1556915046600?e=1666224000&v=beta&t=LligCvyeOL1ZR5qwpgJAokPMkr6SYBodcqq8D51ObPs'

export const Header = ( {cover= DEFAULT_IMAGE} ) => {
    return (
        <>
            <Grid container spacing={10}>
                <Grid item xs={6} md={2}>
                            <Image src={cover}/>
                </Grid>
                <Grid item xs={6} md={10}>
                    <Wrapper>
                        <Name>Mario Sanchez Jaramillo</Name>
                        <Texto>Energy engineer</Texto>
                    </Wrapper>
                </Grid>
            </Grid>
        </>
    )
}
