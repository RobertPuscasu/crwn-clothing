import { createReducer } from 'typesafe-actions';
import { cartAction } from './cart.actions';
import { combineReducers } from 'redux';

const INITIAL_STATE: { hidden: boolean } = {
  hidden: true
};

export const toggleCart = createReducer<typeof INITIAL_STATE>(
  INITIAL_STATE
).handleAction(cartAction, (state, action) => ({...state, hidden: !state.hidden }));


const cartReducer = combineReducers({
	toggleCart
  })

export default cartReducer