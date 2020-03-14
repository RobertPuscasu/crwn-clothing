import * as React from 'react';
import './App.css';
import Main from './layouts/Main/Main';
import { Switch, Route } from 'react-router-dom'
import Shop from './pages/Shop/Shop';
import TopBar from './layouts/Main/Topbar/Topbar'

const App: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Switch>
        <Route  exact path='/' component={Main} />
        <Route  path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
