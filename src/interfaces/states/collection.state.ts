
import { IShop } from '../models/shop.model';

export interface ICollectionsState {
	collection: { [key:string]: IShop }
}