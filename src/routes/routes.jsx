/* eslint-disable react/prop-types */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Pages from '../pages';

function Router({ children }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/favorites" element={<Pages.Favorites />} />
        <Route path="/pokemon/:id" element={<Pages.Pokemon />} />
        <Route path="*" element={<Pages.Error />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
}

Router.prototype = {
  children: PropTypes.element,
};

export default Router;
