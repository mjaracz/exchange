import {EXCHANGE_ERROR, EXCHANGE_SEARCH, EXCHANGE_URL} from './actions';
import {actionExchange, stateExchange} from './types';

const initialState: stateExchange = {
  isLoading: false,
  companies: [],
  error: null,
  url: ''
};

export default function exchangeReducer(state=initialState, action: actionExchange): stateExchange {
  switch (action.type) {
    case EXCHANGE_URL: {
      return {
        ...state,
        isLoading: true,
        url: action.url
      }
    }
    case EXCHANGE_SEARCH: {
      return {
        ...state,
        isLoading: false,
        companies: action.payload
      }
    }
    case EXCHANGE_ERROR: {
      return {
        ...state,
        isLoading: false
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
};
