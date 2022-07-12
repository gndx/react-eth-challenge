import React from 'react'
import '../styles/components/Header.styl'

const Header = ({data}) => {
  return (
    <div className="Header-container">
      <img src="https://avatars.githubusercontent.com/JuliXnCXm" alt="photo" />
      <div>
        <h1 className="Header-title">{data["name"]}</h1>
        <span className="Header-job-title">{data["profession"]}</span>
        <div>
          <span className="Header-phone">{data["phone"]}</span>
          <span className="Header-email">{data["email"]}</span>
          <span className="Header-website">{data["website"]}</span>
        </div>
        <span className="Header-adress">{data["address"]}</span>
      </div>
    </div>
  );
}

export default Header