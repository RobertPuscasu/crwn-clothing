import * as React from 'react';
import './App.css';
import Main from './layouts/Main/Main';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import TopBar from './layouts/Main/Topbar/Topbar';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { useEffect } from 'react';
import { IAuthenticatedUser } from './interfaces/models/auth-user.model';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState<IAuthenticatedUser>(
    Object.create(null) as IAuthenticatedUser
  );

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});
        userRef!.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            } as IAuthenticatedUser)
        });
      }

      setCurrentUser(Object.create(null) as IAuthenticatedUser)
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <TopBar currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUp} />  
      </Switch>
    </div>
  );
};

export default App;
