import { fetchApi } from './api';

const Pokemons = {
  getAllPokemons: async () => {
    return fetchApi('pokemon', {
      method: 'GET',
    });
  },
};

export default Pokemons;
