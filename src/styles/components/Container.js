import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    font-weight: bold;
    margin: 30px 0;

    .title {
        margin-bottom: 25px;
    }

    .container-content {
        font-weight: bold;
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        column-gap: 1em;
        margin-bottom: 1.25em;

        h5 {
            margin-bottom: 5px;
        }

        p {
            margin-bottom: 12px;
        }
    }
`;

export default Container;