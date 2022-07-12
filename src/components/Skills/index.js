import React from 'react'

import {
	Container, Title, SkillsContainer, Info
} from './styles'

import LoadingBar from '../LoadingBar'

const Skills = ({ data }) => {

	return(
		<Container>
			<Title className="Skills-title">Skills</Title>
			<SkillsContainer>
				{data.skills.map((es, index) => (
					<LoadingBar key={index} className="Skills-item" percentage={es.percentage}>
						<Info >{es.name}</Info>
					</LoadingBar>
				))}				
			</SkillsContainer>
		</Container>
	)
}

export default Skills