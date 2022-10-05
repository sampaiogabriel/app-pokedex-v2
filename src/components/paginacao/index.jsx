/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import P from 'prop-types';

import './styles.css';

function Paginacao({ pagAtual, pagTotal, onLeftClick, onRightClick }) {
  const handleProxPagina = () => {
    onLeftClick();
  };

  const handleVoltarPagina = () => {
    onRightClick();
  };

  return (
    <div className="paginacao">
      <button type="button" onClick={handleProxPagina}>
        ⬅
      </button>
      <p>
        {pagAtual} de {pagTotal}
      </p>
      <button type="button" onClick={handleVoltarPagina}>
        ➡
      </button>
    </div>
  );
}

Paginacao.propTypes = {
  pagAtual: P.string.isRequired,
  pagTotal: P.string.isRequired,
  onLeftClick: P.func.isRequired,
  onRightClick: P.func.isRequired,
};

export default Paginacao;
