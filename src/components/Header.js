import React from 'react';

const Header = (props) => {
  return (
    <div
      className='base-wrapper flex-row'
    >
      <div style={{ width: '20%', display: 'flex', justifyContent: 'center' }}>
        <img src={props.avatar} width={100} height={100}/>
      </div>
      <div style={{ width: '80%' }}>
        <span className="Header-title">{props.title}</span>
        {props.children}
      </div>
    </div>
  );
};

export default Header;
