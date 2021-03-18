import { fetchApi } from './api';

const Generations = {
  getAllGenerations: async () => {
    return fetchApi(`generation`, {
      method: 'GET',
    });
  },

  getGenerationsById: async (id) => {
    return fetchApi(`generation/${id}`, {
      method: 'GET',
    });
  },
};

export default Generations;
