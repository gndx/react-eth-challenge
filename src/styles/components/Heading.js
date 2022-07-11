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

    h2, h3, h4, h5, p, a {
        font-size: 14px;
    }

    .About-item {
        margin-top: 5px;
    }

    .website {
        display: inline-block;
        margin-top: 5px;
        font-weight: lighter;
        color: #6d6d6d;
        margin-bottom: 0;
        text-decoration: none;

        &:hover {
            cursor: pointer;
            border-bottom: 1px solid #6d6d6d;
        }
    }
`;

export default Heading;