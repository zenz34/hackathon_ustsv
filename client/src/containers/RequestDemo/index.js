import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import MessagePopup from '../../components/MessagePopup';
import './style.css';

class RequestDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      role: '',
      description: ''
    };
  }

  handleChange = (e, key) => {
    const newObj = {};
    newObj[key] = e.target.value;
    this.setState(newObj);
  };

  handleMenuChange = (e, index, value) => {
    this.setState({role: value});
  };

  handleSubmit = e => {
    const messages = {...this.state};
    this.props.uploadDemo(messages);
  };

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <p>Contact Sales</p>
            <h2>Block fraud and grow revenue with machine learning</h2>
          </Row>
          <Row>
            <Col>
              <Paper zdepth={2}>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="first-name">First Name * </label> 
                    <TextField 
                      hintText="e.g. Jane"
                      value={this.state.firstName}
                      onChange={e => this.handleChange(e, 'firstName')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name">Last Name * </label> 
                    <TextField 
                      hintText="e.g. Smith"
                      value={this.state.lastName}
                      onChange={e => this.handleChange(e, 'lastName')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company-name">Company Name * </label> 
                    <TextField 
                      hintText="e.g. Datawiza"
                      value={this.state.company}
                      onChange={e => this.handleChange(e, 'company')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email Address * </label> 
                    <TextField 
                      hintText="e.g. yourname@email.com"
                      value={this.state.email}
                      type="email"
                      onChange={e => this.handleChange(e, 'email')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone Number * </label> 
                    <TextField 
                      hintText="e.g. 123-456-7890"
                      value={this.state.phone}
                      type="tel"
                      onChange={e => this.handleChange(e, 'phone')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="role">Role * </label>
                    <DropDownMenu
                      value={this.state.role}
                      onChange={this.handleMenuChange}
                    >
                      <MenuItem value="" primaryText="Choose Role" />
                      <MenuItem value="CEO" primaryText="CEO" />
                      <MenuItem value="CTO" primaryText="CTO" />
                      <MenuItem value="Manager" primaryText="Manager" />
                      <MenuItem value="Engineer" primaryText="Engineer" />
                      <MenuItem value="Other" primaryText="Other" />
                    </DropDownMenu>
                  </div>
                  <div>
                    <label htmlFor="description">Brief Description of Your Fraud Problem * </label>
                    <TextField 
                      hintText="Provide details about the type of fraud."
                      value={this.state.description}
                      multiLine={true}
                      rows={2}
                      onChange={e => this.handleChange(e, 'description')}
                    />
                  </div>
                  <RaisedButton 
                    label="Contact Sales"
                    type="submit"
                    primary={true}
                  />
                </form>
              </Paper>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <MessagePopup />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadDemo: messages => dispatch(actions.uploadDemo(messages))
  }; 
};

export default connect(undefined, mapDispatchToProps)(RequestDemo);