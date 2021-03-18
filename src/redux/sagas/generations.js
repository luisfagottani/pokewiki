/* eslint-disable import/no-anonymous-default-export */
import { call, takeLatest, put, delay } from '@redux-saga/core/effects';
import GenerationsApi from 'api/generations';
import { defineGlobalLoading } from 'redux/ducks/app';
import { persistGenerations, Types } from 'redux/ducks/generations';
import { persistPokemons } from 'redux/ducks/pokemons';
import { reduceSpecies } from 'redux/utils';

export function* fetchGenerations() {
  try {
    yield put(defineGlobalLoading(true));
    yield delay(1000);
    const response = yield call([GenerationsApi, GenerationsApi.getAllGenerations]);
    const generations = response?.results;

    yield put(persistGenerations(generations));
    yield put(defineGlobalLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchGenerationsById(id) {
  try {
    yield put(defineGlobalLoading(true));
    yield delay(1000);
    const response = yield call([GenerationsApi, GenerationsApi.getGenerationsById], id);

    const species = reduceSpecies(response?.['pokemon_species']);
    yield put(persistGenerations([{ name: response?.name }]));
    yield put(persistPokemons(species));
    yield put(defineGlobalLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield takeLatest(Types.FETCH_GENERATIONS, function* (data) {
    yield call(fetchGenerations, data.payload);
  });

  yield takeLatest(Types.FETCH_GENERATIONS_BY_ID, function* (data) {
    yield call(fetchGenerationsById, data.payload);
  });
}
