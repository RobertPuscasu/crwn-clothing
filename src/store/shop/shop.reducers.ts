import SHOP_DATA from 'src/utils/data/shop';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { IShop } from 'src/interfaces/models/shop.model';


const collections = createReducer<{[key:string]: IShop}>(SHOP_DATA);

const shopReducer = combineReducers({
	collections: collections
})

export default shopReducer;