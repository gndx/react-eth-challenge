import React from 'react';

const Content = ({data}) => {
  const test = () => (
    <ul>
      {data &&
        Object.values(data).map((items) => <li key={items}> {items} </li>)}
    </ul>
  );
  return (
    <>
     {test()}
    </>
  );
};

export default Content;
