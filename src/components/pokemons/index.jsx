/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Paginacao from '../paginacao';
import SearchBar from '../searchBar';
import PokemonCard from '../pokemonCard';
import { getPokemons, getTotalPokemonsPerPage } from '../../services/api';

import './styles.css';

const POKEMONSPERPAGE = 15;

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const totalPokemons = await getTotalPokemonsPerPage();
      const arrayPokemonsPromises = await getPokemons(
        POKEMONSPERPAGE,
        POKEMONSPERPAGE * page,
      );
      const arrayPokemons = await Promise.all(arrayPokemonsPromises);
      setPokemons(arrayPokemons);
      setLoading(false);
      setTotalPage(Math.ceil(totalPokemons / POKEMONSPERPAGE));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('fetch Pokemons error:', error);
    }
  };

  const changePage = (num) => {
    setPage(num);
  };

  const onLeftClickHandler = () => {
    if (page > 0) {
      changePage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page !== totalPage) {
      changePage(page + 1);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div className="pokemons-grid">
      <div className="pokemon-grid-search-pagination">
        <SearchBar />
        <Paginacao
          pagAtual={page + 1}
          pagTotal={totalPage}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <>Carregando...</>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pokemons;
