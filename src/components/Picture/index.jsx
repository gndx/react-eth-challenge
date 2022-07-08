import React from 'react';

const Picture = ({avatar}) => {
  console.log(avatar)
  return (
      <img src={avatar}></img>
  );
}

export default Picture;