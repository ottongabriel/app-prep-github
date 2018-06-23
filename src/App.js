import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = {
  wrapper: {
    display: 'flex',
    height: 560,
    background: 'linear-gradient(to bottom, #5a4ba3 0%, #7b3795 100%)',
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />

        <div className={classes.wrapper}>Hey</div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
