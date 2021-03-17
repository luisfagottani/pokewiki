/* eslint-disable import/no-anonymous-default-export */
import { call, takeLatest, put, delay, select } from '@redux-saga/core/effects';
import PokemonsApi from 'api/pokemons';
import { defineGlobalLoading } from 'redux/ducks/app';
import { getPokemons, persistPokemon, persistPokemons, Types } from 'redux/ducks/pokemons';

export function* fetchPokemons() {
  try {
    const state = yield select();
    const pokemons = Object.values(getPokemons(state));

    if (pokemons.length > 19) {
      return;
    }

    yield put(defineGlobalLoading(true));
    yield delay(1000);
    const response = yield call([PokemonsApi, PokemonsApi.getAllPokemons], 0, 200);
    const species = response?.results.reduce((current, next) => {
      const name = next?.name;
      if (!current[name]) {
        current[name] = { name };
      }
      return current;
    }, {});

    yield put(persistPokemons(species));
    yield put(defineGlobalLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchPokemonById(id) {
  try {
    const state = yield select();
    const pokemons = Object.values(getPokemons(state));

    if (pokemons.length < 1) {
      yield fetchPokemons();
    }
    const response = yield call([PokemonsApi, PokemonsApi.getPokemonById], id);
    const { name, ...details } = response;

    yield put(persistPokemon({ name: id, details }));
    yield put(defineGlobalLoading(false));
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
