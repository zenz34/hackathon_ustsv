import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import StatusItem from '../../components/StatusItem';
import * as actions from '../../actions';

class Status extends Component {

  componentDidMount() {
    this.props.getServers();
  }

  render() {
    const { login } = this.props;
    return (
      <div>
        <div>{login.info.companyName}</div>
        <Table>
          <TableHeader>
            <TableHeaderColumn>Appliance Server</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Version</TableHeaderColumn>
            <TableHeaderColumn>Started Time</TableHeaderColumn>
            <TableHeaderColumn>Lasted</TableHeaderColumn>
          </TableHeader>
          <TableBody>
            {this.props.servers.servers.map(server => {
              return <StatusItem server={server} />
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    servers: state.servers,
    login: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getServers: () => dispatch(actions.getServers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Status);