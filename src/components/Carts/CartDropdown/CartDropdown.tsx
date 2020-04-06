import * as React from 'react';

import './style.scss';
import Button from 'src/forms/Button/Button';
import CartItem from '../CartItem/CartItem';
import { IShopItem } from 'src/interfaces/models/shop-item.model';
import { RootState } from 'typesafe-actions';
import { useSelector } from 'react-redux';

const CartDropdown = () => {
  const cartItems: IShopItem[] = useSelector(
    (state: RootState) => state.cart.addCart.cartItems
  );

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
