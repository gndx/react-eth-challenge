import React from 'react';
import Section from '../containers/Section.jsx';
import jsonData from '../../data.json';
let data = jsonData.data;
console.log(data);

const Header = () => {
  return (
    <Section id="Header" className="flex m-1">
      <div className="w-[200px] h-[200px] mr-10 drop-shadow-2xl">
        <img className="rounded-full" src={data.avatar} alt="" />
      </div>
      <div className="flex flex-col pt-4">
        <h1 className="Header-title">{data.name}</h1>
        <div>
          <h2>{data.profession}</h2>
          <div className="flex mb-2">
            <p className="mr-4">{data.phone}</p>
            <p className="mr-4">{data.email}</p>
            <p className="mr-4">{data.website}</p>
          </div>
          <p>{data.address}</p>
        </div>
      </div>
    </Section>
  );
};

export default Header;
