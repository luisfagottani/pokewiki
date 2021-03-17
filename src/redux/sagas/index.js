import app from './app';
// import auth from "./auth";
// import members from "./members";
// import contracts from "./contracts";
import pokemons from './pokemons';

const runSaga = (sagaMiddleware) => {
  sagaMiddleware.run(pokemons);
};

export default runSaga;
