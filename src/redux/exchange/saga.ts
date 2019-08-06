import {EXCHANGE_ERROR, EXCHANGE_SEARCH, EXCHANGE_URL} from "./actions";
import {actionExchange} from './types';

import {put, call, takeEvery} from 'redux-saga/effects'
import {get} from './api';

function* sagaExchange(action: actionExchange) {
  try {
    const url: string = action.url.toString();
    const data = yield call(get, url);
    yield put({type: EXCHANGE_SEARCH, payload: data});
    if(data[0]['1. symbol'] === undefined) throw new Error('page not found')
  }
  catch(e) {
    yield put({type: EXCHANGE_ERROR, error: e});
    console.warn('[redux-saga] error: ' + e)
  }
}

function* watchSagaExchange() {
  yield takeEvery(EXCHANGE_URL, sagaExchange)
}

export default watchSagaExchange;
