import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/pokedex-logo.png';
import SearchBar from '../../searchBar';
import './styles.css';

function Menu() {
  return (
    <nav>
      <img src={Logo} alt="Pokedex Logo" />
      <div className="menu">
        <SearchBar />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Pokémons Favoritos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
