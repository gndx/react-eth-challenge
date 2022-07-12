import React from 'react'

import { 
	Container, Title
} from './styles'

const Header = ({ children }) => {

	return(
		<Container>
			<Title className="Header-title">hola</Title>
			{children}
		</Container>
	)
}

export default Header