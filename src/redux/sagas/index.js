import generations from './generations';
import pokemons from './pokemons';

const runSaga = (sagaMiddleware) => {
  sagaMiddleware.run(pokemons);
  sagaMiddleware.run(generations);
};

export default runSaga;
