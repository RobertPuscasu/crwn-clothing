import * as React from 'react';
import './App.css';
import Main from './layouts/Main/Main';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import TopBar from './layouts/Main/Topbar/Topbar';
import Signup from './pages/Signup/Signup';
import { auth } from './firebase/firebase';
import { useEffect } from 'react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(
    null
  );

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(setCurrentUser);

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <TopBar currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
