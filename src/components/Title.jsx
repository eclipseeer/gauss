import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  h1: {
    fontSize: '25px',
    fontWeight: '500',
    fontFamily: 'Roboto, sans-serif',
    color: '#212121',
    position: 'absolute',
    top: '5%',
  },
};

const Title = ({ classes }) => (
  <h1 className={classes.h1}>
    Розвязування СЛАР методом Гауса
  </h1>
);

export default withStyles(styles)(Title);
