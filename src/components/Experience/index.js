import React, {useState, useEffect} from "react";
import { Wrapper, Title, Texto } from "../../styles/components/GlobalStyle";
import {Grid} from '@mui/material';


export const Experience = () => {
    const getData = () => {
        fetch('data.json')
            .then(response => response.json())
            .then(info => setData(info.data.Academic))
    }
    const [data, setData] = useState([])
    useEffect(() => {getData()}, []);

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