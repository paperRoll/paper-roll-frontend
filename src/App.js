import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Logout from './components/Logout/Logout';
import Summary from './containers/Summary/Summary';
import Timesheet from './containers/Timesheet/Timesheet';
import Profile from './containers/Profile/Profile';

import 'font-awesome/css/font-awesome.min.css';
import Navigation from './components/Navigation/Navigation';

function App() {
  let routes = (
    <Switch>
      <Route path='/summary' component={Summary}></Route>
      <Route path='/timesheet' component={Timesheet}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Redirect to="/" />
    </Switch>
  )
  return (
    <div class="app-container">
      <Logout />
      <div class="leftbox"> 
        <Navigation/>
      </div>
      <div class="rightbox">
        {routes}
      </div>
    </div>
  );
}

export default App;
