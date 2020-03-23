import * as React from 'react';
import './App.css';
import Main from './layouts/Main/Main';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import TopBar from './layouts/Main/Topbar/Topbar';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { useEffect } from 'react';
import { IAuthenticatedUser } from './interfaces/models/auth-user.model';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from './store/user/user.actions';
import { RootState } from 'typesafe-actions';
import * as _ from 'lodash';

export const EMPTY_USER: IAuthenticatedUser = Object.freeze({
  id: '',
  createdAt: Object.create(null) as Date,
  email: '',
  displayName: ''
});

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState<IAuthenticatedUser>(
    Object.create(null) as IAuthenticatedUser
  );

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.currentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});
        userRef!.onSnapshot(snapShot =>
          dispatch(
            createUser.request({
              id: snapShot.id,
              ...snapShot.data()
            } as IAuthenticatedUser)
          )
        );
      }

      dispatch(createUser.request(Object.create(null) as IAuthenticatedUser));
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/signin" render={() => _.isEmpty(user) ? (<SignInAndSignUp />): (<Redirect to='/' />)  } />
      </Switch>
    </div>
  );
};

export default App;
