import React, { useState, useEffect } from "react";
import {Grid} from '@mui/material';
import { Image, Wrapper, Texto, Name } from "./styles";

const DEFAULT_IMAGE = 'https://media-exp1.licdn.com/dms/image/C4D03AQHo3s0BEAiVAw/profile-displayphoto-shrink_800_800/0/1556915046600?e=1666224000&v=beta&t=LligCvyeOL1ZR5qwpgJAokPMkr6SYBodcqq8D51ObPs'
const DEFAULT_IMAGE2 = 'https://lh3.googleusercontent.com/Ij2ZRQUfV3IlNkps3f-PiO-0v9XxdktvOXco7tOolV04zFZSgt73mRv8GgSmDCBeWtaMsNOtnSjrDvZDfCMUFjRqG-_cq9Hzr1b6=s0'
const DEFAULT_IMAGE3 = 'https://scontent.flil1-1.fna.fbcdn.net/v/t39.30808-6/289459071_10227531959663104_5880300873946608039_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=i6YMGFd9KpIAX-wmsXH&_nc_ht=scontent.flil1-1.fna&oh=00_AT9IhR3uI82uMxCUdQgrAp8mylIRq0UHb9PJ-laJmC4omA&oe=62FFF659'


export const Header = ( {cover= DEFAULT_IMAGE2} ) => {
    return (
        <>
            <Grid container spacing={10}>
                <Grid item xs={6} md={2}>
                            <Image src={cover}/>
                </Grid>
                <Grid item xs={6} md={10}>
                    <Wrapper>
                        <Name>{data}</Name>
                        <Texto>Product Owner</Texto>
                        <Grid container>
                            <Grid item xs={4}>
                                <Texto>✉️ mario.sanchez.j@hotmail.com</Texto>
                            </Grid>
                            <Grid item xs={4}>
                                <Texto></Texto>
                            </Grid>
                            <Grid item xs={4}>
                                <Texto>📍 Lille, France</Texto>
                            </Grid>
                        </Grid>
                    </Wrapper>
                </Grid>
            </Grid>
        </>
    )
}
