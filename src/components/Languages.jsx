import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ data }) => 
{
  return  (
            <div className='Languages'>
              <h2 className='Languages-title'>My Languages</h2>
                {
                  data ?
                    data.map  ((elemento) => 
                                            {
                                              return  (
                                                        <div className='Languages-item'> 
                                                          <span className='name'>
                                                            {elemento.name} :
                                                          </span>
                                                          <span className='percentage'>
                                                            {' '+elemento.percentage}
                                                          </span>
                                                        </div>
                                                      );
                                            }         ) : <div>...</div>
                }
            </div>
          );
};

export default Languages;
