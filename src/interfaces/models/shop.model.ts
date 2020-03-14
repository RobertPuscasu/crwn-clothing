import { IShopItem } from "./shop-item.model";

export interface IShop {
	id: number;
	title: string;
	routeName: string;
	items: IShopItem[];
}