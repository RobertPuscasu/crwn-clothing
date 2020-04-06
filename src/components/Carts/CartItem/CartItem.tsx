import * as React from 'react';
import './style.scss';
import { IShopItem } from 'src/interfaces/models/shop-item.model';

interface ICartItemProps {
	item: IShopItem
}

const CartItem: React.FC<ICartItemProps> = ({item}) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="price">
        {item.quantity} x ${item.price}
      </span>
    </div>
  </div>
);

export default CartItem;
