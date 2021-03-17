import { fetchApi } from './api';

const Pokemons = {
  getAllPokemons: async (offset = 0, limit = 20) => {
    return fetchApi(`pokemon?offset=${offset}&limit=${limit}`, {
      method: 'GET',
    });
  },

  getPokemonById: async (id) => {
    return fetchApi(`pokemon/${id}`, {
      method: 'GET',
    });
  },
};

export default Pokemons;
