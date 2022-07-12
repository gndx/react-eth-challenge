import React from 'react'

import {
	Container, Title, Description
} from './styles'

const Profile = ({ data }) => {

	return(
		<Container>
			<Title className="Profile-title">Profile</Title>
			<Description className="Profile-desc">{data.Profile}</Description>
		</Container>
	)
}

export default Profile