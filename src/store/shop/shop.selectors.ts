import { createSelector } from 'reselect';
import { RootState } from 'typesafe-actions';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
)
