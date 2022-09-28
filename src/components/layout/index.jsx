/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import React from 'react';
import Menu from './Menu';
import Helmet from './Helmet';
import './styles.css';

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Helmet />
      <Menu />
      {children}
    </div>
  );
}

Layout.prototype = {
  children: propTypes.element,
};

export default Layout;
