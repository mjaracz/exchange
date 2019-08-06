import {all} from 'redux-saga/effects';
import watchSagaExchange from "./exchange/saga";
import watchSagaLogo from "./brand/saga";

function* rootSaga() {
  yield all([
    watchSagaExchange(),
    watchSagaLogo()
  ])
}

export default rootSaga;
