import {combineReducers} from 'redux';
import exchangeReducer from './exchange/reducer'
import brandReducer from './brand/reducer';
import {stateApp} from './types';

const rootReducer =
  combineReducers<stateApp>({
    exchange: exchangeReducer,
    brand: brandReducer
  });


export default rootReducer;
