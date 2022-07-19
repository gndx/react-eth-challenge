import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ data }) => 
{
  return  (
            <div className='Experience'>
              <h2 className='Experience-title'>My Experience</h2>
                {
                  data ?
                    data.map  ((elemento) => 
                                            {
                                              return  (
                                                        <div className='Experience-item'> 
                                                          <span className='jobTitle'>
                                                            {elemento.jobTitle} :
                                                          </span>
                                                          <span className='company'>
                                                            {' '+elemento.company}
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

export default Experience;
