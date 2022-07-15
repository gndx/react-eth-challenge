import * as React from 'react';

function SvgArrowPaper(props) {
  return (
    <svg width={200} height={150} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path fill='#333' stroke='#333' opacity='NaN' d='m2 92 43.607-.327v46.885l-43.607-46.558z' />
      <path fill='#ea8d35' stroke='#ff7f00' opacity='NaN' d='m0 90-.538-85.403h104.864c14.414 13.153 29.812 28.929 44.227 42.082l-45.06 43.323-103.493-.002z' />
    </svg>
  );
}

export default SvgArrowPaper;
