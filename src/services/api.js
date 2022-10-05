/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
export const searchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.error('error:', error);
  }
};

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((results) =>
        results.map((pokemon) => getPokemon(pokemon.url).then((data) => data)),
      );
  } catch (error) {
    console.error('error:', error);
  }
};

export const getPokemon = async (url) => {
  try {
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.error('error:', error);
  }
};

export const getTotalPokemonsPerPage = async () => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((results) => results.length);
  } catch (error) {
    console.error('error:', error);
  }
};
