import React from 'react';

const Header = (props) => {
  console.log(props.avatar);
  return (
    <div className="Header section media">
      <div className="media-left has-text-centered">
        <figure className="image is-128x128 is-inline-block is-vcentered">
          <img className="is-rounded" src={props.avatar} alt="avatar" />
        </figure>
      </div>
      <div className="media-content has-text-white">
        <h1 className="Header-title title is-1 has-text-white">{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
};

export default Header;
