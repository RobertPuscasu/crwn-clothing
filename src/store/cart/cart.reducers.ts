import { createReducer } from 'typesafe-actions';
import { cartAction, addCartAction, clearItemFromCart, removeItemAction } from './cart.actions';
import { combineReducers } from 'redux';
import { addItemToCart, removeItemFromCart } from '../../utils/cart.utils';
import { IShopItem } from '../../interfaces/models/shop-item.model';

export const toggleCart = createReducer<boolean>(
  true
).handleAction(cartAction, (state, action) => !state);


export const addCart = createReducer<IShopItem[]>(
  []
)
.handleAction(addCartAction, (state, action) => (addItemToCart(state, action.payload)))
.handleAction(clearItemFromCart, (state, action) => state.filter(cartItem => cartItem.id !== action.payload.id))
.handleAction(removeItemAction, (state, action) =>  (removeItemFromCart(state, action.payload)));

const cartReducer = combineReducers({
  hidden: toggleCart,
  cartItems: addCart, 
});

export default cartReducer;
