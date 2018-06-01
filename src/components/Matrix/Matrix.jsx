import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Table from './Table';
import Results from './Results';
import Error from './Error';
import Back from './Back';
import gauss from '../../gauss';

const styles = {
  container: {
    height: '70vh',
    width: '80vw',
    display: 'grid',
    gridTemplateColumns: '5% 90% 5%',
    gridTemplateRows: '15% 50% 5% 10% 5%',
    gridTemplateAreas:
    ` '. a .'
      '. b .'
      '. . .'
      '. c .'
      '. . .'
      '. d .' `,
  },
  navWrapper: {
    gridArea: 'a',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tableWrapper: {
    gridArea: 'b',
    overflow: 'auto',
  },
  resultsWrapper: {
    gridArea: 'c',
    overflow: 'auto',
  },
  buttonWrapper: {
    gridArea: 'd',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '20%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 2px 10px 2px rgba(255, 105, 135, .30)',
  },
};

class Matrix extends Component {
  constructor() {
    super();
    this.calcResult = this.calcResult.bind(this);
    this.setValueToMatrix = this.setValueToMatrix.bind(this);
    this.state = {
      matrix: null,
      error: false,
      result: [],
    }
  }
  static getDerivedStateFromProps(nextPrors, prevState) {
    const { size } = nextPrors;
    if (prevState.matrix === null) {
      return {
        matrix: new Array(size).fill(new Array(size + 1).fill(null)),
      };
    }
    return null;
  }
  setValueToMatrix(value, m, n) {
    const { matrix } = this.state;
    const _matrix = matrix.map(elem => [...elem]);
    _matrix[m][n] = value;
    this.setState({ matrix: _matrix });
  }
  calcResult() {
    const { matrix } = this.state;
    const _matrix = matrix.map(elem => [...elem]);
    const isNull = matrix.some(elem => elem.some(elem => elem === null || isNaN(elem)));
    if (isNull) {
      this.setState({ error: 'empty' });
      return false;
    }
    try {
      const x = _matrix.map(elem => elem.pop());
      const result = gauss(_matrix, [...x]);
      this.setState({ result, error: false });
    } catch(e) {
      this.setState({ error: true });
    }
  }
  render() {
    const { classes, backToForm } = this.props;
    const { matrix, error, result } = this.state;
    return (
      <div className={classes.container}>

        <div className={classes.navWrapper}>
          <Back onClick={backToForm} />
        </div>

        <div className={classes.tableWrapper}>
          <Table
            matrix={matrix}
            setValueToMatrix={this.setValueToMatrix}
          />
        </div>

        <div className={classes.resultsWrapper}>
          {error ? <Error error={error} /> : <Results result={result} />}
        </div>

        <div className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            onClick={this.calcResult}
          >
            Розрахувати
          </Button>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Matrix);
