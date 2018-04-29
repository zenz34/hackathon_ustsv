import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table'

const StatusItem = ({server}) => {
  return (
    <TableRow>
      <TableRowColumn>{server.name}</TableRowColumn>
      <TableRowColumn>{server.status}</TableRowColumn>
      <TableRowColumn>{server.version}</TableRowColumn>
      <TableRowColumn>{server.staredTime}</TableRowColumn>
      <TableRowColumn>{server.lasted}</TableRowColumn>
    </TableRow>
  );
};

export default StatusItem;