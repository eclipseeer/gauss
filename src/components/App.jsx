import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Title from './Title';
import Container from './Container';

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
};

const App = ({ classes }) => (
  <div className={classes.container}>
    <Title />
    <Container />
  </div>
);


export default withStyles(styles)(App);
