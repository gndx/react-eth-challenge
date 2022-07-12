import React from 'react'

import {
	Container, Title, LanguagesContainer, Info
} from './styles'

import LoadingBar from '../LoadingBar'

const Languages = ({ data }) => { 

	return(
		<Container>
			<Title className="Languages-title">Languages</Title>
			<LanguagesContainer>
				{data.languages.map((lan, index) => (
					<LoadingBar percentage={lan.percentage} key={index} className="Languages-item">
						<Info>
							{lan.name}
						</Info>						
					</LoadingBar>
				))}
			</LanguagesContainer>
		</Container>
	)
}

export default Languages