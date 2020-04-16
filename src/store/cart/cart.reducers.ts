import { createReducer } from 'typesafe-actions';
import { cartAction, addCartAction } from './cart.actions';
import { combineReducers } from 'redux';
import { ICartState } from 'src/interfaces/states/cart.state';
import { addItemToCart } from '../../utils/cart.utils';
import { IShopItem } from '../../interfaces/models/shop-item.model';

const INITIAL_STATE: ICartState = {
  hidden: true,
  cartItems: []
};

export const toggleCart = createReducer<boolean>(
  false
).handleAction(cartAction, (state, action) => !state);

export const addCart = createReducer<IShopItem[]>(
  []
).handleAction(addCartAction, (state, action) => (addItemToCart(state, action.payload)));

const cartReducer = combineReducers({
  hidden: toggleCart,
  cartItems: addCart
});

export default cartReducer;
