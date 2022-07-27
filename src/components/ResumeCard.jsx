import React from "react";
import Academic from './Academic';
import Experience from "./Experience";
import Certificate from "./Certificate";

const ResumeCard = ({ item, local }) => {
  const { icon, type, colorBackground, data } = item;

  const Icon = icon;
  
  return (
    <>
      <div>
        <div className="flex items-center space-x-2 mb-4 ">
          <Icon className="text-6xl text-[#F95054]" />
          <h4 className="text-5xl dark:text-white font-medium">{type}</h4>
        </div>

        {data?.map((resume, i) => {  
          return             {
              'Academic': <Academic item={resume} local={local} key={i} colorBackground={colorBackground} />,
              'Certificate':<Certificate item={resume} local={local} key={i} colorBackground={colorBackground} />,
              'Experience': <Experience item={resume} local={local} key={i} colorBackground={colorBackground} />
            }[type] || <Academic item={resume} local={local} key={i} colorBackground={colorBackground} />  
        })}
      </div>
    </>
  );
};

export default ResumeCard;
