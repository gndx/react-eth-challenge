import React, {useState, useEffect } from "react";
import { Wrapper, Title, Texto } from "../../styles/components/GlobalStyle";
import { getData } from "../../utils/getData";

export const Profile = () => {
    const getData = () => {
        fetch('data.json')
            .then(response => response.json())
            .then(info => setData(info.data.Profile))
    }
    const [data, setData] = useState([])
    useEffect(() => {getData()}, []);

    return (
        <Wrapper>
            <Title>Profile</Title>
            <Texto>{data}</Texto>
        </Wrapper>
    )
}