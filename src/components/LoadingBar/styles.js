import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	width: 100%;
	height: auto;
	align-items: center;	
`

export const Bar = styled.div`
	border: 1px solid black;
	width: 100px;
	height: 10px;
	background-color: #14181D;
`

export const BarIncrease = styled.div`
	width: ${props => props.percentage}px;
	height: 100%;
	background-color: white;
`
