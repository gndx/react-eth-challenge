import React from 'react';
import Image from 'react-bootstrap/Image';
import profileImg from '@/assets/img/profle.jpg';
import { ReactComponetProps } from '@/types/global';
import '@/assets/styles/components/Header.scss';

const Header = ({ children }: ReactComponetProps) => (
  <aside className="profile-container bg-section p-4 pt-0 position-fixed h-100">
    <nav className="profile-menu d-flex flex-wrap p-4 pt-0 mb-4 rounded bg-black position-relative">
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
