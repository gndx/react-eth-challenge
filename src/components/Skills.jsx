import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ data }) => 
{
  return  (
            <div className='Skills'>
              <h2 className='Skills-title'>My Skills</h2>
                {
                  data ?
                    data.map  ((elemento) => 
                                            {
                                              return  (
                                                        <div className='Skills-item'> 
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

export default Skills;
