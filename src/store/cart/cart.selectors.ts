import { RootState } from 'typesafe-actions';
import { createSelector } from 'reselect';
import { IShopItem } from 'src/interfaces/models/shop-item.model';

export const selectItemCount = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems: IShopItem[]) =>
    cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

const selectCart = (state: RootState) => state.cart

export const selectCardHidden = createSelector(
	[selectCart],
	cart => cart.hidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0)
)