import React from 'react';

/** Shows avatar from data data context*/
const Picture = ({avatar}) => {
  console.log(avatar)
  return (
      <img src={avatar}></img>
  );
}

export default Picture;