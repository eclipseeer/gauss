import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  input: {
    height: '20px',
    width: '40px',
    textAlign: 'center',
  },
};

class Input extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const { m, n, setValueToMatrix } = this.props;
    setValueToMatrix(e.target.valueAsNumber, m, n);
  }
  render() {
    const { classes } = this.props;
    return (
      <input
        type="number"
        className={classes.input}
        onChange={this.onChange}
      />
    )
  }
}

export default withStyles(styles)(Input);
