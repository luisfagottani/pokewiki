import pokemons from './pokemons';

const runSaga = (sagaMiddleware) => {
  sagaMiddleware.run(pokemons);
};

export default runSaga;
