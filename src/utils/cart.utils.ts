import { IShopItem } from 'src/interfaces/models/shop-item.model';

export const addItemToCart = (cartItems: IShopItem[], cartItemToAdd: IShopItem): IShopItem[] => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map(cartItem => 
			cartItem.id === cartItemToAdd.id ? 
			{ ...cartItem, quantity: cartItem.quantity + 1 }: 
			cartItem) 
	}

	return [...cartItems, {...cartItemToAdd, quantity: 1}];

}