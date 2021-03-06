import { createAsyncAction } from 'typesafe-actions'
import { IAuthenticatedUser } from 'src/interfaces/models/auth-user.model';

export const createUser = createAsyncAction(
  '[Create User API] Request',
  '[Create User API] Success',
  '[Create User API] Failure'
)<IAuthenticatedUser, IAuthenticatedUser, Error, undefined>()
