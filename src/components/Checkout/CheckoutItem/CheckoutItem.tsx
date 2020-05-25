import * as React from 'react';
import './style.scss';
import { IShopItem } from 'src/interfaces/models/shop-item.model';

interface ICheckoutItemProps {
	item: IShopItem
}

const CheckoutItem: React.FC<ICheckoutItemProps> = ({item : {name, imageUrl, price, quantity}}) => (
	<div className="checkout-item">
		<div className="image-container">
			<img src={imageUrl} alt='item' />
		</div>
		<span className='name'>{name}</span>
		<span className='quantity'>{quantity}</span>
		<span className='price'>{price}</span>
		<div className='remove-button'>&#10005;</div>
	</div>
);

export default CheckoutItem;