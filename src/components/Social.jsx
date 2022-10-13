import React from 'react';
import getIcon from '../utils/getIcon';

const Social = ({social}) => {
  return (
    <div className="flex justify-center space-x-3">
      {social?.map((item, i) => {
        const { color, icon} = getIcon(item.name);

        return  <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        key={i}
      >
        <span style={{ color: `${color}` }} className="socialbtn">
          {icon}
        </span>
      </a>
      })}
    </div>
  );
};

export default Social;
