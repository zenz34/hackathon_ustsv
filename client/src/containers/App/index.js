import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage';
import Login from '../Login';
import RequestDemo from '../RequestDemo';
import SignUp from '../SignUp';
import Status from '../Status';
import CloudManagement from '../CloudManagement';
import './App.css';
import cloudManagement from '../../reducers/cloudManagement';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact={true} component={LandingPage} />
              <Route path="/login" component={Login} />
              <Route path="/requestDemo" component={RequestDemo} />
              <Route path="/signup" component={SignUp} />
              <Route path="/status" component={Status} />
              <Route path="/cloudManagement" component={CloudManagement} />
            </Switch>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
