import React from "react"
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai"

export default function Header({children, name = "default name", social = [], avatar = "", profession = "default profession"}) {
  const setIcon = (socialNet, url) => {
    switch (socialNet) {
      case "linkedin":
        return <a href={url}><AiFillLinkedin size="28px" style={{ fill: "url(#icon-gradient)"}}/></a>
      case "github":
        return <a href={url}><AiFillGithub size="28px" style={{ fill: "url(#icon-gradient)"}}/></a>
      case "facebook":
        return <a href={url}><AiFillFacebook size="28px" style={{ fill: "url(#icon-gradient)"}}/></a>
      case "twitter":
        return <a href={url}><AiFillTwitterCircle size="28px" style={{ fill: "url(#icon-gradient)"}}/></a>
      default:
        return <div>Default</div>
    }
  }
  return (
    <header className="Header">
      <svg width="0" height="0">
        <linearGradient id="icon-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop stopColor="#007BA4" offset="17%" />
          <stop stopColor="#1A438B" offset="100%" />
        </linearGradient>
      </svg>
      <div className="Header-container">
        <div className="Header-subcontainer">
          <ul className="Header-social">
            {social?.map((item, index) => (
              <li key={index} className="Header-social-item">{setIcon(item.name, item.url)}</li>
            ))}
          </ul>
          <img src={avatar} alt="Avatar" />
          <h2 className="Header-title">{name}</h2>
          <h4>{profession}</h4>
        </div>
        {children}
      </div>
    </header>
  )
}