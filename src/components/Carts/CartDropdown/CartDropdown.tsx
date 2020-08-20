import * as React from 'react';

import './style.scss';
import Button from 'src/forms/Button/Button';
import CartItem from '../CartItem/CartItem';
import { IShopItem } from 'src/interfaces/models/shop-item.model';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from 'src/store/cart/cart.selectors';
import { cartAction } from 'src/store/cart/cart.actions'
import { push } from 'connected-react-router';

const CartDropdown: React.FC = () => {
  const cartItems: IShopItem[] = useSelector(selectCartItems)
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? (
          cartItems.map(cartItem => 
            (<CartItem key={cartItem.id} item={cartItem}></CartItem>
))) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={() => 
        {
          dispatch(push('checkout'))
          dispatch(cartAction());
          }}>
          GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
