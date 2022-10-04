/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import pokebola from '../../assets/pokebola.png';

import './styles.css';

function Error404() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };

  return (
    <div className="error">
      <h1 className="error-titulo">
        <span>4</span>
        <img className="error-img" src={pokebola} alt="pokebola" />
        <span>4</span>
      </h1>
      <span>Ops... página não encontrada!</span>
      <button type="button" onClick={redirect}>
        ⬅ Volte para a Pokedéx
      </button>
    </div>
  );
}

export default Error404;
