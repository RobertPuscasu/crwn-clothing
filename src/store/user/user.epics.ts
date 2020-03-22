import { isActionOf, RootEpic } from 'typesafe-actions';
import { filter, mergeMap, map } from 'rxjs/operators';
import { createUser } from './user.actions';
import { of } from 'rxjs';

export const createUserEpic: RootEpic = (action$, _, { api }) => {
  return action$.pipe(
    filter(isActionOf(createUser.request)),
    mergeMap(action =>
      of(action.payload).pipe(map(createUser.success))
    )
  );
};
