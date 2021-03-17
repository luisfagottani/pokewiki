/* eslint-disable import/no-anonymous-default-export */
import { call, takeLatest, put } from '@redux-saga/core/effects';
import PokemonsApi from 'api/pokemons';
import { Deserializer } from 'jsonapi-serializer';
import { defineGlobalLoading } from 'redux/ducks/app';
import { Types } from 'redux/ducks/pokemons';

export function* transformAndPersist(response) {
  console.log(response);
}

export function* fetchPokemons(payload) {
  try {
    const response = yield call([PokemonsApi, PokemonsApi.getAllPokemons]);
    yield transformAndPersist(response);

    yield put(defineGlobalLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield takeLatest(Types.FETCH_POKEMONS, function* (data) {
    yield call(fetchPokemons, data.payload);
  });
}
