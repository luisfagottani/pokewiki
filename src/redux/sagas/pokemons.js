/* eslint-disable import/no-anonymous-default-export */
import { call, takeLatest, put, delay } from '@redux-saga/core/effects';
import PokemonsApi from 'api/pokemons';
import { defineGlobalLoading } from 'redux/ducks/app';
import { getPokemons, persistPokemons, Types } from 'redux/ducks/pokemons';

export function* persistInStore(species) {
  yield put(persistPokemons(species));
  yield put(defineGlobalLoading(false));
}

// export function* updatePokemons(pokemon) {
//   const state = yield select();
//   let pokemons = { ...getPokemons(state) };
//   const { name, ...details } = pokemon;

//   if (pokemons[name]) {
//     pokemons[name] = { details, isFetched: true, ...pokemons[name] };
//   } else {
//     pokemons[name] = { name, details, isFetched: true };
//   }

//   return pokemons;
// }

export function* fetchPokemons() {
  try {
    yield put(defineGlobalLoading(true));
    yield delay(1000);
    const response = yield call([PokemonsApi, PokemonsApi.getAllPokemons], 0, 200);
    const species = response?.results.reduce((current, next) => {
      const name = next?.name;
      if (!current[name]) {
        current[name] = { name, details: {}, isFetched: false };
      }
      return current;
    }, {});

    yield persistInStore(species);
  } catch (error) {
    console.log(error);
  }
}

export function* fetchPokemonById(id) {
  try {
    const response = yield call([PokemonsApi, PokemonsApi.getPokemonById], id);
    // const species = yield updatePokemons(response);
    // yield persistInStore(species);
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield takeLatest(Types.FETCH_POKEMONS, function* (data) {
    yield call(fetchPokemons, data.payload);
  });

  yield takeLatest(Types.FETCH_POKEMON_BY_ID, function* (data) {
    yield call(fetchPokemonById, data.payload);
  });
}
