import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class MessagePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      name: '',
      email: '',
      questions: ''
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      open: true,
      anchorEl: e.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, key) => {
    const newObj = {};
    newObj[key] = event.target.value;
    this.setState(newObj);
  };

  // TODO: Handle submit
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <RaisedButton
          label="Send us a message!"
          onClick={this.handleClick}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <form onSubmit={this.submit}>
            <Paper zdepth={1}>
              <p>
                We're not available right now, but please leave us a message.
                We'll get back to you within the next business day.
            </p>
              <TextField
                hintText="Your name"
                underlineShow={false}
                value={this.state.name}
                onChange={e => this.handleChange(e, 'name')}
                required
              />
              <Divider />
              <TextField
                hintText="Your email"
                underlineShow={false}
                type="email"
                value={this.state.email}
                onChange={e => this.handleChange(e, 'email')}
                required
              />
              <Divider />
              <TextField
                hintText="Questions, comments, concerns, etc."
                underlineShow={false}
                multiLine={true}
                rows={2}
                value={this.state.questions}
                onChange={e => this.handleChange(e, 'questions')}
              />
              <Divider />
              <RaisedButton
                label="Send"
                type="submit"
              />
            </Paper>
          </form>
        </Popover>
      </div>
    );
  }
}

export default MessagePopup;