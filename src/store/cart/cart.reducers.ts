import { createReducer } from 'typesafe-actions';
import { cartAction, addCartAction } from './cart.actions';
import { combineReducers } from 'redux';
import { ICartState } from 'src/interfaces/states/cart.state';
import { IShopItem } from 'src/interfaces/models/shop-item.model';
import { addItemToCart } from '../../utils/cart.utils';

const INITIAL_STATE: ICartState = {
  hidden: true,
  cartItems: []
};

export const toggleCart = createReducer<typeof INITIAL_STATE>(
  INITIAL_STATE
).handleAction(cartAction, (state, action) => ({
  ...state,
  hidden: !state.hidden
}));

export const addCart = createReducer<typeof INITIAL_STATE>(INITIAL_STATE)
.handleAction(addCartAction, (state, action) => ({...state, cartItems: addItemToCart(state.cartItems, action.payload)}));

const cartReducer = combineReducers({
  toggleCart, 
  addCart
});

export default cartReducer;
