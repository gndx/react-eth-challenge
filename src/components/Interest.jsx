import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ data }) => 
{
  return  (
            <div className='Interest'>
              <h2 className='Interest-title'>My Interest</h2>
                {
                  data ?
                    data.map  ((elemento) => 
                                            {
                                              return  (
                                                        <div className='Interest-item'> 
                                                            {elemento}
                                                        </div>
                                                      );
                                            }         ) : <div>...</div>
                }
            </div>
          );
};

export default Interest;
