import styled from "styled-components";

const Heading = styled.header`
    font-weight: bold;
    display: flex;
    flex-direction:row;
    column-gap: 1em;

    .thumb {
        width: 20%;

        img {
            width: 100%;
            border-radius: 100%;
        }
    }

    h1 {
        font-size: 20px;
    }

    h2, h3, h4, h5, p {
        font-size: 14px;
    }
`;

export default Heading;