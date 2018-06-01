import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = {
  container: {
    height: '35vh',
    width: '35vw',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    gridArea: 'c',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 2px 10px 2px rgba(255, 105, 135, .30)',
  },
  input: {
    width: '20%',
  },
};

const inputProps = {
  id: 'input-x-matrix',
  min: 1,
  max: 30,
};

class Form extends Component {
  constructor() {
    super();
    this.onClick= this.onClick.bind(this);
  }
  onClick() {
    const { setMatrixSize } = this.props;
    setMatrixSize(+(this.inputMatrix.value));
  }
  render() {
    const { classes, setMatrixSize } = this.props;
    return (
      <div className={classes.container}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="subheading"
        component="h3"
      >
        Введіть кількість змінних
      </Typography>
      <TextField
        className={classes.input}
        inputProps={inputProps}
        defaultValue={3}
        type="number"
        inputRef={input => this.inputMatrix = input}
      />
      <Button
        className={classes.button}
        onClick={this.onClick}
      >
        Cтворити матрицю
      </Button>
      </div>
    );
  }
}
export default withStyles(styles)(Form);
