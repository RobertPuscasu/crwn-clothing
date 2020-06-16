import { combineReducers } from 'redux'

import userReducer from './user/user.reducers';
import cartReducer from './cart/cart.reducers';
import directoryReducer from './directory/directory.reducers'
import shopReducer from './shop/shop.reducers'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}
const rootReducer = combineReducers({ 
	user: userReducer, 
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
})
const persistRed =  persistReducer(persistConfig, rootReducer);

export default persistRed;
