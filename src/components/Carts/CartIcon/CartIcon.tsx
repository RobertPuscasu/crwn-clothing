import * as React from 'react';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import './style.scss';
import { useDispatch } from 'react-redux';
import { cartAction } from 'src/store/cart/cart.actions';

const CartIcon: React.FC = () => {

  const dispatch  = useDispatch();

  return (
    <div className="cart-icon" onClick={e => dispatch(cartAction())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
