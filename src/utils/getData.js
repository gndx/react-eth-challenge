import React from 'react';

const getData = async (url) => {
  console.log('voy a fetchear')
  return fetch(url)
    .then(body => body.json())
}

export default getData;
