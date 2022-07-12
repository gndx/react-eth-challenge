import React from 'react'

import {
	Container, Title, InterestContainer, Info
} from './styles'

const Interest = ({ data }) => { 
		
	return(
		<Container>
			<Title className="Interest-title">Interest</Title>
			<InterestContainer>
				{data.interest.map((int, index) => (										
					<Info key={index} className="Interest-item">						
						{int}
					</Info>
				))}
			</InterestContainer>
		</Container>
	)
}

export default Interest