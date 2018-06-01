import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  cell: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.85)',
    textAlign: 'center',
  }
};

const Results = ({ classes, result }) => (
  <Table className={classes.table}>
    <TableBody>
      <TableRow>
        {result.map((elem, i) => (
          <TableCell key={`ia${i}`} className={classes.cell}>
            X<sub>{i + 1}</sub>&nbsp;=&nbsp;{elem.toFixed(2)}
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  </Table>
);

export default withStyles(styles)(Results);
