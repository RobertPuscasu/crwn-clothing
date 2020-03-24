import * as React from 'react';

import './style.scss'
import Button from '../../forms/Button/Button';

const CartDropdown = () => (
	<div className='cart-dropdown'>
		<div className='cart-items'/>
		<Button>GO TO CHECKOUT</Button>
	</div>
)

export default CartDropdown;