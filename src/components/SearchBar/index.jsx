import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import P from 'prop-types';

import './styles.css';

function SearchBar({ searchValue, onClickButton }) {
  return (
    <div className="search-bar">
      <input className="search-input" value={searchValue} />
      <button className="search-button" type="button" onClick={onClickButton}>
        <SearchOutlined />
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  searchValue: P.string.isRequired,
  onClickButton: P.func.isRequired,
};

export default SearchBar;
