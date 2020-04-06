import { IShopItem } from '../models/shop-item.model';

export interface ICartState {
	hidden: boolean;
	cartItems: IShopItem[];
}