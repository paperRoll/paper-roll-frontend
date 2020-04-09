import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Footer from '../../components/Footer/Footer';
import Logout from '../../components/Logout/Logout';
import Summary from '../Summary/Summary/Summary';
import Timesheet from '../Timesheet/Timesheet';
import Profile from '../Profile/Profile/Profile';

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';

const routes = (
  <Switch>
    <Route path='/summary' component={Summary}></Route>
    <Route path='/timesheet' component={Timesheet}></Route>
    <Route path='/profile' component={Profile}></Route>
    <Redirect exact from="/" to="/summary" />
  </Switch>
);

class App extends Component {

  render() {
    return (
      <div className="wrapper d-flex flex-column">
        <Header className="header" />
        <div className="app-container">
          <Logout />
          <div className="leftbox"> 
            <Navigation/>
          </div>
          <div className="rightbox">
            {routes}
          </div>
        </div>
        <Footer className="footer" />

      </div>
      

    );
  }
}

export default App;
