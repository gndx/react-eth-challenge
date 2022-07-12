import React from 'react'

import {
	AcContainer, Info, Container, Title, AcademicGroup
} from './styles'

const EachAc = ({ ac }) => {	
	console.log(ac)
	return(
		<AcContainer>
			<Info>Degree: {ac.degree}</Info>
			<Info>Description: {ac.description}</Info>
			<Info>Institution: {ac.institution}</Info>			
			<Info>From {ac.startDate}, to: {ac.endDate}</Info>			
		</AcContainer>
	)
}

const Academic = ({ data }) => {

	return(
		<Container>			
			<Title className="Academic-title">Academic</Title>
			<AcademicGroup>
				{data.Academic.map((ac, index) => (						
					<EachAc ac={ac} key={index} className="Academic-item"/>
				))}
			</AcademicGroup>		
		</Container>
	)
}

export default Academic