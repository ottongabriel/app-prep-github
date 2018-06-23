import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  headerWrapper: {
    width: '100%',
    display: 'flex',
    height: 45,
    // marginBottom: 20,
    fontSize: 20,
    fontWeight: 600,
    color: '#fff',
  },

  headerText: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
};

const Header = ({ classes }) => (
  <section className={classes.headerWrapper}>
    <div className={classes.headerText}>GitHub Search</div>
  </section>
);

export default withStyles(styles)(Header);
