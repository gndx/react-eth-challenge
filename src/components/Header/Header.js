import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Avatar, Div } from './styles';

function Header({ children }) {
  return (
    <Div>
      <Avatar src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
      {children}
    </Div>
  );
}

export default Header;
