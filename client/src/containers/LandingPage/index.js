import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MessagePopup from '../../components/MessagePopup';
import './style.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/requestDemo">Request Demo</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </header>
        <div className="home">
          Welcome!
        </div>
        <div className="message">
          <MessagePopup />
        </div>
      </div>
    );
  }
}

export default LandingPage; 