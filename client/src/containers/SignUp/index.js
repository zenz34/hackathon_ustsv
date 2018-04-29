import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import MessagePopup from '../../components/MessagePopup';
import './style.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      website: '',
      email: '',
      password: ''
    };
  }

  handleChange = (e, key) => {
    const newObj = {};
    newObj[key] = e.target.value;
    this.setState(newObj);
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {...this.state}
    this.props.signUp(user);
  };

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="first-name">First Name </label>
                  <TextField
                    hintText="First Name"
                    id="first-name"
                    value={this.state.firstName}
                    onChange={e => this.handleChange(e, 'firstName')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name">Last Name </label>
                  <TextField
                    hintText="Last Name"
                    id="last-name"
                    value={this.state.lastName}
                    onChange={e => this.handleChange(e, 'lastName')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="website">Website Address </label>
                  <TextField
                    hintText="www.example.com"
                    id="website"
                    type="url"
                    value={this.state.website}
                    onChange={e => this.handleChange(e, 'website')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email Address </label> 
                  <TextField
                    hintText="example@email.com"
                    id="email"
                    type="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e, 'email')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">Password </label>
                  <TextField
                    id="password"
                    type="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e, 'password')}
                    required
                  />
                </div>
                <div>
                  <RaisedButton
                    label="Create Account"
                    primary={true}
                    type="submit"
                  />
                </div>
                <div>
                  Already have an account? 
                  <Link to="/login">Log in here.</Link>
                </div>
              </form>
            </Col>
            <Col>

            </Col>
          </Row>
          <Row>
            <Col className="message">
              <MessagePopup />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(actions.signUp(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);