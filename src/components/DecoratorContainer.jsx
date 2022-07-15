import React from 'react';
import SvgArrowPaper from './SvgArrowPaper';
import '../styles/components/DecoratorContainer.styl';

function DecoratorContainer({ children }) {
  return (
    <article className='DecoratorContainer'>
      <SvgArrowPaper className='DecoratorContainer-svg-arrow' />
      {children}
    </article>
  );
}

export default DecoratorContainer;
