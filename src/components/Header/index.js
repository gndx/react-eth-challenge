import React from 'react'
import './styles.styl'
const DEFAULT_IMAGE = 'https://avatars.githubusercontent.com/LuisFDuarte'


export const Header = ({ cover= DEFAULT_IMAGE}) => { 
    return (
    <div className='Container-Header'>
        <img src={cover} className='avatar'/>
        <div className='Header-title'>
            <h1>Luis Felipe Duarte Herrera</h1>
        </div> 
    </div>
   )
}