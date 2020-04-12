import * as React from 'react';

import './style.scss'
import { IShopItem } from 'src/interfaces/models/shop-item.model';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from 'src/store/cart/cart.selectors';

const Checkout: React.FC = () => {
	const cartItems: IShopItem[] = useSelector(selectCartItems);
	const total: number = useSelector(selectCartTotal);

	return (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(cartItem => (cartItem.name))
		}

		<div className='total'>
			<span>TOTAL: ${total}</span>
		</div>
	</div>
)}

export default Checkout;