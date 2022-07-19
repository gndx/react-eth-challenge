import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ data }) => 
{
  return  (
            <div className='Academic'>
              <h2 className='Academic-title'>My Academic</h2>
                {
                  data ?
                    data.map  ((elemento) => 
                                            {
                                              return  (
                                                        <div className='Academic-item'> 
                                                          <span className='degree'>
                                                            {elemento.degree} :
                                                          </span>
                                                          <span className='institution'>
                                                            {' '+elemento.institution}
                                                          </span>
                                                          <span className='date'>
                                                            ({' '+elemento.startDate} - {elemento.endDate})
                                                          </span>
                                                        </div>
                                                      );
                                            }         ) : <div>...</div>
                }
            </div>
          );
};

export default Academic;
