import * as React from 'react';
import './style.scss';
import { IShopItem } from 'src/interfaces/models/shop-item.model';
import { useDispatch } from 'react-redux';
import { clearItemFromCart, removeItemAction, addCartAction } from 'src/store/cart/cart.actions';

interface ICheckoutItemProps {
  item: IShopItem;
}

const CheckoutItem: React.FC<ICheckoutItemProps> = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItemAction(item))}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addCartAction(item))}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(item))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
