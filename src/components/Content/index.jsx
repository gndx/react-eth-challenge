import React from 'react';

const Content = ({ data = {} }) => {
  const contentData = () => (
    <ul>
      {data &&
        Object.values(data).map((items) => <li key={items}> {items} </li>)}
    </ul>
  );
  return <>{contentData()}</>;
};

export default Content;
