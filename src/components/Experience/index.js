import React from 'react'

import {
	ExContainer, Info, Container, Title, ExperienceGroup
} from './styles'

const EachEx = ({ ex }) => {	
	return(
		<ExContainer>
			<Info>Job Title: {ex.jobTitle}</Info>
			<Info>Company: {ex.company}</Info>
			<Info>Description: {ex.jobDescription}</Info>			
			<Info>From {ex.startDate}, to: {ex.endDate}</Info>			
		</ExContainer>
	)
}

const Experience = ({ data }) => {		
	return(
		<Container>
			<Title className="Experience-title">Experience</Title>
			<ExperienceGroup>
				{data.experience.map((ex, index) => (						
					<EachEx ex={ex} key={index} className="Experience-item"/>										
				))}
			</ExperienceGroup>
		</Container>
	)
}

export default Experience