import {put, call, takeEvery} from 'redux-saga/effects';
import {get} from './api';

import {BRAND_ERROR, BRAND_FETCH, BRAND_URL} from './actions'

function* logoSaga(action) {
  try {
    const url: string = action.url.toString();
    const data = yield call(get, url);
    put({type: BRAND_FETCH, payload: data})
  }
  catch(e) {
    put({type: BRAND_ERROR, error: e});
    console.warn('[redux-saga] error: ' + e)
  }
}

function* watchSagaLogo() {
  yield takeEvery(BRAND_URL, logoSaga)
}

export default watchSagaLogo;
