import { createAction } from 'typesafe-actions';
import { IShopItem } from 'src/interfaces/models/shop-item.model';


export const cartAction = createAction('hideCart')<void>()
export const addCartAction = createAction('addCart')<IShopItem>();