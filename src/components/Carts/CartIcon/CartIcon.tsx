import * as React from 'react';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from 'src/store/cart/cart.actions';
import { selectItemCount } from 'src/store/cart/cart.selectors';

const CartIcon: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectItemCount);

  return (
    <div className="cart-icon" onClick={e => dispatch(cartAction())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
});

export default CartIcon;
