import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class CloudManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {disabled: true};
  }

  componentDidMount() {
    this.props.getCustomerVersions();
  }

  // TODO: CHANGE VERSION TO THE SERVER
  handleClick = e => {

  };

  handleChange = (event, index, version) => {
    this.props.changeCurVersion(version);
    this.setState({disabled: false});
  };

  getVersions = name => {
    if (!name || name === "") {
      return [];
    }
    for (let customer of this.props.customerVersions.customerVersions) {
      if (customer.name === name) {
        return customer.versions;
      }
    }
    return [];
  };

  render() {
    return (
      <div>
        <div>
          <SelectField
            floatingLabelText="Customers"
            value=""
            onChange={this.handleChange}
          >
            <MenuItem value="" primaryText="Choose a customer" />
            {this.props.customerVersions.customerVersions.map((customerVersion, index) => {
              return <MenuItem key={index} value={customerVersion.name} primaryText={customerVersion.name} />
            })}
          </SelectField>
        </div>
        <div>
          <SelectField
            floatingLabelText="Choose a version"
            value=""
            onChange={this.props.changeVersion}
          >
            <MenuItem value="" primaryText="Choose a server version"/>
            {this.getVersions(this.props.states.value).map((version, index) => {
              return <MenuItem key={index} value={version} primaryText={version} />
            })}
          </SelectField>
          <RaisedButton 
            label="Update Version"
            primary={true}
            onClick={this.handleClick}
            disabled={this.state.disabled}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    customerVersions: state.customerVersions,
    states: state.cloudManagement
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCustomerVersions: () => dispatch(actions.getCustomerVersions()),
    changeValue: (event, index, value) => dispatch(actions.changeValue(value)),
    changeVersion: version => dispatch(actions.changeCurVersion(version))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CloudManagement);