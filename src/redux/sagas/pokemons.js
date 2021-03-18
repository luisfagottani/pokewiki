/* eslint-disable import/no-anonymous-default-export */
import { call, takeLatest, put, delay } from '@redux-saga/core/effects';
import PokemonsApi from 'api/pokemons';
import { defineGlobalLoading } from 'redux/ducks/app';
import { persistPokemons, Types } from 'redux/ducks/pokemons';
import { reduceSpecies } from 'redux/utils';

export function* fetchPokemons() {
  try {
    yield put(defineGlobalLoading(true));
    yield delay(1000);
    const response = yield call([PokemonsApi, PokemonsApi.getAllPokemons], 0, 200);
    const species = reduceSpecies(response?.results);

    yield put(persistPokemons(species));
    yield put(defineGlobalLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchPokemonById(id) {
  try {
    const species = [];
    const response = yield call([PokemonsApi, PokemonsApi.getPokemonById], id);
    const { name, ...details } = response;

    species[id] = { name: id, details };

    yield put(persistPokemons(species));
    yield put(defineGlobalLoading(false));
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
