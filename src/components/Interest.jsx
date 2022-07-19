import React from 'react'
import styled from 'styled-components'

const Interest = ({ interests = [[], [], []] }) => {
    return (
        <Container>
            <h3 className='title Interest-title'>Interests</h3>
            {
                interests ?
                    interests.map((interest, index) => {
                        return (
                            <li key={index} className='Interest-item'>
                                <p className='item'>{interest}</p>
                            </li>
                        )
                    })
                    :
                    <p>Loading...</p>
            }
        </Container>
    )
}

const Container = styled.div`

    margin: 30px 0;

    .Interest-item {
        display: inline-flex;
        flex-direction: row;

        p {
            margin-right: 16px;
        }
    }

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

        .progress {
            .progress-bar {
            }
        }
    }
`;

export default Interest