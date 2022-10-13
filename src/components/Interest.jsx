import React from 'react';

const Interest = ({interest}) => {

  return (

    <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20 Interest-item">
            <div className="grid gap-8 Interest-item">
                  <h4 className="text-5xl dark:text-white font-medium mb-8 Skills-item Interest-title"> Interests </h4>
                    <div className="flex gap-y-5 gap-x-2.5 flex-wrap Interest-item">
                    {interest?.map((item, i) => ( 
                      <button className="interest-btn" key={i}>{item}</button>
                    ))}
                    </div>
            </div>
            </div>
  );
};

export default Interest;
