import * as React from 'react';
import './App.css';
import Main from './layouts/Main/Main';
import { Switch, Route } from 'react-router-dom'

const HatsPage: React.FC = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route  exact path='/' component={Main} />
        <Route  path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
