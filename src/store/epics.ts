import { combineEpics } from 'redux-observable';

import * as userEpics from './user/user.epics'

export default combineEpics(
  ...Object.values(userEpics),
)
