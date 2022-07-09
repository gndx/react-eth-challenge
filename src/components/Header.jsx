import React from 'react'

function Header(props) {
  const { name, profession,  address, email, website, phone, avatar } = props.object;
  return (
    <div className='Header'>
      <div className='Header__container'>
        <div className='Header__section_uno'>
          <img className='Header__imagen' src={avatar} alt="" />
        </div>
        <div className='Header__section_dos'>
          <div className='Header__section_header'>
            <span className='Header-title name'>{name}</span>
            <span className='Header-job-title descrip'>{profession}</span>
          </div>
          
          <div>
            <div>
              <span className='Header-phone item-row '>📞 {phone}</span>
              <span className='Header-email item-row'>📧 {email}</span>
              <span className='Header-website item-row'><a href={website} target="_blank">💻 Visit my website!</a></span>
            </div>
            <span className='Header-address item-row'>{address}</span>
          </div>
          
        </div>
      </div>
      
      {props.children}
    </div>
  )
}

export default Header;