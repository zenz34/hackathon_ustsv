import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MessagePopup from '../../components/MessagePopup';
import { connect } from 'react-redux';
import './style.css';

class LandingPage extends Component {
  render() {
    const { login } = this.props;
    return (
      <div>
        <header>
          <Link to="/requestDemo">Request Demo</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          {login.success ? <Link to="/status">Server Status</Link>: null}
          {login.success ? <Link to="/cloudManagement">Cloud Management</Link>: null}
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

const mapStateToProps = state => {
  return {
    login: state.login
  }
};

export default connect(mapStateToProps)(LandingPage); 