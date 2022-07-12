import styled from 'styled-components'

/*
Paleta de colores

#07080a negro
#14181d azul oscuro
#273139 azul no tan oscuro
white letras
*/

export const Main = styled.div`	
	margin: 0;
	padding: 0;
	width: 100%;
	height: auto;
	display: grid;
	grid-template-rows: 25vh 20vh 35vh 70vh;
	grid-gap: 1vh;
`

export const Group = styled.div`
	display: grid;	
	grid-template-columns: 1fr 1fr;
	height: 100%;
	width: 100%;
	grid-gap: 1vh;
`