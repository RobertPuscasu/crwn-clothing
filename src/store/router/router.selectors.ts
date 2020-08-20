import { createSelector } from 'reselect';
import { RootState } from 'typesafe-actions';

const selectRouter = (state: RootState) => state.router;

export const selectPath = createSelector(
	[selectRouter],
	router => router.location.pathname
)
