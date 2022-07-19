import React from 'react';
import '../../styles/components/Layout.css';

function Layout({ children }) {
  return (
    <div className='Layout'>
      {children}
    </div>
  );
};
export default Layout;
