import React, { useContext } from 'react';
import About from './About';
import { Context } from '../containers/App';
import { Grid } from '@mui/material';
import { Wrapper, Name, Texto, Image } from '../styles/GlobalStyle';

const Header = () => {
    const data = useContext(Context);

    return (
        <>
            <Grid container spacing={10}>
                <Grid item xs={6} md={2}>
                    <Image src={data.avatar}/>
                </Grid>
                <Grid item xs={6} md={10}>
                    <Wrapper>
                        <Name className="Header-title">{data.name}</Name>
                        <Texto>{data.profession}</Texto>
                        <Grid container>
                            <About />
                        </Grid>
                    </Wrapper>
                </Grid>
            </Grid>
        </>
    )
}

export default Header;
