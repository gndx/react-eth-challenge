import styled from 'styled-components'

export const Contenedor = styled.div`
display:flex;
flex-direction:column;
align-items:center;

@media only  screen and (max-width: 600px) {
    flex-direction:row;
}


`;