import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Matrix from './Matrix/Matrix';
import Form from './Form';

class Container extends Component {
  constructor() {
    super();
    this.setMatrixSize = this.setMatrixSize.bind(this);
    this.backToForm = this.backToForm.bind(this);
    this.state = {
      formVisible: true,
      size: 3,
    }
  }
  setMatrixSize(size) {
    this.setState({ size, formVisible: false });
  }
  backToForm() {
    this.setState({ formVisible: true });
  }
  render() {
    const { formVisible, size } = this.state;
    return (
      <Paper elevation={7}>
        {formVisible ?
          <Form setMatrixSize={this.setMatrixSize} /> :
          <Matrix size={size} backToForm={this.backToForm} />
        }
      </Paper>
    )
  }
}


export default Container;
