import React from 'react';
import Image from 'react-bootstrap/Image';
import profileImg from '../assets/img/profile.jpg';
import '../assets/styles/components/Header.scss';

/** Shows Header information*/
const Header = ({ children }) => (
  <aside className="profile-container bg-section p-4 pt-0 h-100">
    <nav className="profile-menu d-flex flex-wrap align-items-baseline p-4 pt-0 mb-4 rounded bg-black position-relative">
      <div className="img-container rounded">
        <Image
          src={profileImg}
          rounded={true}
          alt="Jonathan Photo"
          className="img"
        />
      </div>
      {children}
    </nav>
  </aside>
);

export default Header;
