import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import './styles.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input className="search-input" />
      <button className="search-button" type="button">
        <SearchOutlined />
      </button>
    </div>
  );
}

export default SearchBar;
