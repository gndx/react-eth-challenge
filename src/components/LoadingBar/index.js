import React from 'react'


import {
	Container, Bar, BarIncrease
} from './styles'

const LoadingBar = ({ children, percentage }) => {
	const percen = percentage.slice(0, percentage.length-1)
	console.log(percen)

	return (
		<Container>			
			{children}
			<Bar>
				<BarIncrease percentage={percen} />			
			</Bar>
		</Container>
	)
}	

export default LoadingBar;