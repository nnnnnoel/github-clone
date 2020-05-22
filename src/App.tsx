import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Auth from './pages/Auth';
import Authentication from './pages/Authentication';
import Main from './pages/Main';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Auth} />
      <Route path='/authentication' component={Authentication} />
      <Route path='/main' component={Main} />
    </Router>
  );
};

export default App;
