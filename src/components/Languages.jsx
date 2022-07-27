import React from 'react';
import LineItem from "./LineItem";

import { lineColors } from '../constants/Resources';

const Languages = ({languages, local}) => {

  return (
  <div className="col-span-1 Languages-title">
                  <h4 className="text-5xl dark:text-white font-medium mb-6 Languages-item">
                  Languages          </h4>
                  <div className="Languages-item"><div className="Languages-item">

          {languages?.map((item, i) => {
            let language = Object.assign({},item);
            language.color = lineColors[i].color;
            return <LineItem item={language} local={local} key={i} />
          })}
                  </div>
                  </div></div>
  );
};

export default Languages;
