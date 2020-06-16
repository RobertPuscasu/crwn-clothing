import SHOP_DATA from 'src/utils/data/shop';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { ICollectionsState } from '../../interfaces/states/collection.state';


const collections = createReducer<ICollectionsState[]>(SHOP_DATA);

const shopReducer = combineReducers({
	collections: collections
})

export default shopReducer;