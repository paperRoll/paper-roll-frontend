import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Logo/Logo';
import Logout from '../../components/Logout/Logout';
import Summary from '../Summary/Summary';
import Timesheet from '../Timesheet/Timesheet';
import Profile from '../Profile/Profile';

import 'font-awesome/css/font-awesome.min.css';
import Navigation from '../../components/Navigation/Navigation';

const routes = (
  <Switch>
    <Route path='/summary' component={Summary}></Route>
    <Route path='/timesheet' component={Timesheet}></Route>
    <Route path='/profile' component={Profile}></Route>
    <Redirect to="/" />
  </Switch>
);

class App extends Component {

  render() {
    return (
      <div class="app-container">
         <Logo />

        <Logout />
        <div class="leftbox"> 
          <Navigation/>
        </div>
        <div class="rightbox">
          {routes}
        </div>
        <Footer />

      </div>

    );
  }
}

export default App;
