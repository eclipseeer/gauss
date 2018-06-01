import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from './Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  cell: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.85)',
  }
};

const MatrixTable = ({ classes, matrix, setValueToMatrix }) => (
  <Table className={classes.table}>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {matrix.map((el, i) => (
          <TableCell className={classes.cell} key={`N${i}`}>
            N<sub>{i + 1}</sub>
          </TableCell>
        ))}
        <TableCell className={classes.cell}>
          B
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {matrix.map((el, m) => (
        <TableRow key={`M${m}`}>
          <TableCell className={classes.cell}>
            M<sub>{m + 1}</sub>
          </TableCell>
          {matrix[0].map((el, n) => (
            <TableCell key={`mx${n}`}>
              <Input
                m={m}
                n={n}
                setValueToMatrix={setValueToMatrix}
              />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default withStyles(styles)(MatrixTable);
