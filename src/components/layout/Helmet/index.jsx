import React from 'react';
import { Helmet as Header } from 'react-helmet';

function Helmet() {
  return (
    <Header>
      <meta charSet="utf-8" />
      <title>Pokedéx</title>
      <meta name="description" content="Site sobre Pokemons" />
      <link rel="icon" type="image/x-icon" href="/public/favicon.png" />
    </Header>
  );
}

export default Helmet;
