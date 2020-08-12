import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SessionProvider } from './utils/GlobalState';
import TopNav from './components/TopNav';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Item from './pages/Item';
import SessionInit from './pages/SessionInit';
import Session from './pages/Session';
import SessionResults from './pages/SessionResults';
import Signout from './components/Signout';
import PrivateRoute from './components/PrivateRoute';

const App = () => {

  return (
    <Router>
      <div>
        <SessionProvider>
          <TopNav />
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />

          <Switch>
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/new" component={Item} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/start" component={SessionInit} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/session" component={Session} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/results" component={SessionResults} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/signout" component={Signout} />
          </Switch>
        </SessionProvider>
      </div>
    </Router>
  )
}

export default App;