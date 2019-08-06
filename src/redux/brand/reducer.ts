import {BRAND_URL, BRAND_FETCH, BRAND_ERROR} from './actions';
import {actionBrand, stateBrand} from './types';

const initialState: stateBrand = {
  isLoading: false,
  brands: [],
  error: null,
  url: ''
};

function brandReducer(state=initialState, action: actionBrand): stateBrand {
  switch (action.type) {
    case BRAND_URL: {
      return {
        ...state,
        isLoading: true,
        url: action.url
      }
    }
    case BRAND_FETCH: {
      return {
        ...state,
        isLoading: false,
        brands: action.payload
      }
    }
    case BRAND_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default brandReducer;
