/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import './styles.css';

function Paginacao() {
  // eslint-disable-next-line no-unused-vars
  const [pagAtual, setPagAtual] = useState(1);
  const totalPages = 100;

  const handleProxPagina = () => {
    console.log('click esquerda pra direita');
  };

  const handleVoltarPagina = () => {
    console.log('click direita para esquerda');
  };

  return (
    <div className="paginacao">
      <button type="button" onClick={handleProxPagina}>
        ⬅
      </button>
      <p>
        {pagAtual} de {totalPages}
      </p>
      <button type="button" onClick={handleVoltarPagina}>
        ➡
      </button>
    </div>
  );
}

export default Paginacao;
