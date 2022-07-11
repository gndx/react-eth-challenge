import React from 'react';
import Container from '../styles/components/Container';

const Languages = ({languages = [{}, {}, {}]}) => {
    return (
        <Container>
            <h3 className='title Languages-title'>Languages</h3>
            {
                languages ?
                    languages.map((language, index) => {
                        let width = { 'width': language.percentage }

                        return (
                            <li key={index} className='Languages-item container-content'>
                                <p className='language-name'>{language.name}</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={width} aria-valuenow={language.percentage} aria-valuemin="0" aria-valuemax="100">{language.percentage}</div>
                                </div>

                            </li>
                        )
                    })
                    :
                    <p>Loading...</p>
            }
        </Container>
    )
}

export default Languages;