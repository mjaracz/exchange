import {stateExchange} from './exchange/types';
import {stateBrand} from './brand/types';

export interface stateApp {
  exchange: stateExchange;
  brand: stateBrand;
}
