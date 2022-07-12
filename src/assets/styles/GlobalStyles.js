import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`	

    *{        
        margin: 0;
        padding: 0; 
        font-family: 'Ubuntu', sans-serif;        
    }    
    body{
    	width: 98%;    
    	height: 100vh;
        margin: 1%;
        background-color: #14181D;       
        color: white;
    }
    li {
        list-style: none;
    }
    p {
        margin: 5px 0;
        font-weight: bold;
    }
`
