import React from 'react';
import { AppContainer } from '../../styles';

const Layout: React.FC = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};

export default Layout;
