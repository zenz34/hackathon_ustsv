import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import * as actions from '../../actions';

class Login extends Component {

  handleEmailChange = e => {
    this.props.changeEmail(e.target.value);
  };

  handlePassWordChange = e => {
    this.props.changePassword(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <Grid>
          <h2>Datawiza</h2>
          <form onSubmit={this.handleSubmit}>
            <Paper zdepth={1}>
              <TextField
                hintText="Email"
                type="email"
                underlineShow={false}
                value={this.props.curState.user.email}
                onChange={this.handleEmailChange}
              />
              <Divider />
              <TextField
                hintText="Password"
                underlineShow={false}
                type="password"
                value={this.props.curState.user.password}
                onChange={this.handlePassWordChange}
              />
              <Divider />
              <RaisedButton
                label="Log in"
                type="submit"
                primary={true}
              />
              <p>Dont't have an account? <Link to="/signup">Sign up here.</Link></p>
            </Paper>
          </form>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    curState: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeEmail: email => dispatch(actions.changeLoginEmail(email)),
    changePassword: password => dispatch(actions.changeLoginPassword(password)),
    login: () => dispatch(actions.login())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

