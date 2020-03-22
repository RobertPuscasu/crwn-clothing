import { combineReducers } from 'redux'
import { createUser } from './user.actions'
import { createReducer } from 'typesafe-actions';
import { IUserModel } from '../../interfaces/models/user.model';
import { IAuthenticatedUser } from 'src/interfaces/models/auth-user.model';

export const initialState: IAuthenticatedUser = Object.create(null) as IAuthenticatedUser

const user = createReducer<typeof initialState>(initialState).handleAction(
  createUser.success, (state: IAuthenticatedUser | null, action) =>   action.payload
)

const userReducer = combineReducers({
  currentUser: user
})

export default userReducer
