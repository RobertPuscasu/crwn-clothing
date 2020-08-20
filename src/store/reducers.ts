import { combineReducers } from 'redux'

import userReducer from './user/user.reducers';
import cartReducer from './cart/cart.reducers';
import directoryReducer from './directory/directory.reducers'
import shopReducer from './shop/shop.reducers'
import { persistReducer } from 'redux-persist';
import { connectRouter } from 'connected-react-router'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}
const rootReducer = (history) => combineReducers({ 
	router: connectRouter(history),
	user: userReducer, 
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
})
const persistRed = (history) => persistReducer(persistConfig, rootReducer(history));

export default persistRed;
