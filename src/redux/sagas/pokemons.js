/* eslint-disable import/no-anonymous-default-export */
import { call, takeLatest, put } from '@redux-saga/core/effects';
import PokemonsApi from 'api/pokemons';
import { defineGlobalLoading } from 'redux/ducks/app';
import { persistPokemons, Types } from 'redux/ducks/pokemons';

export function* transformAndPersist(response) {
  const species = response?.results ?? [];

  yield put(persistPokemons(species));
  yield put(defineGlobalLoading(false));
}

export function* fetchPokemons() {
  try {
    const response = yield call([PokemonsApi, PokemonsApi.getAllPokemons], 0, 200);
    yield transformAndPersist(response);
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield takeLatest(Types.FETCH_POKEMONS, function* (data) {
    yield call(fetchPokemons, data.payload);
  });
}
