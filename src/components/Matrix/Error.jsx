import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  error: {
    fontSize: '1rem',
    fontFamily: 'Roboto',
    color: 'rgba(0, 0, 0, 0.85)',
    textAlign: 'center',
  },
};

const Error = ({ classes, error }) => (
  error === 'empty' ?
    <p className={classes.error}>Заповніть усі поля матриці</p> :
    <p className={classes.error}>Трапилась помилка</p>
);

export default withStyles(styles)(Error);
