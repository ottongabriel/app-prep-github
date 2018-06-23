import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { SEARCH_FORM_HEADING_TEXT } from '../../constants';

const styles = {
  searchForm: {
    marginTop: 50,
  },

  formWrapper: {
    display: 'flex',
    marginTop: 30,
  },

  headingText: {
    fontWeight: 300,
    letterSpacing: 1,
    color: '#fff',
  },

  textFieldLabel: {
    color: '#fff',
  },

  textFieldLarge: {
    width: 100,
    marginRight: 80,
  },

  textFieldSmall: {
    width: 80,
  },

  cssUnderline: {
    '&:before': {
      borderBottomColor: '#fff',
    },
    '&:after': {
      borderBottomColor: '#fff',
    },
  },

  cssLabel: {
    color: '#fff',
    '&$cssFocused': {
      color: '#fff',
    },
  },

  cssFocused: {},

  button: {
    marginTop: 50,
    background: 'linear-gradient(135deg,#fd853a 0%,#fd6e37 100%)',
    color: '#fff',
    letterSpacing: 1,
    boxShadow: 'none',
  },
};

class SearchForm extends Component {
  render() {
    const {
      classes,
      language,
      stars,
      handleInputChange,
      handleSearchSubmit,
    } = this.props;

    return (
      <section className={classes.searchForm}>
        <Typography className={classes.headingText} variant="display1">
          {SEARCH_FORM_HEADING_TEXT}
        </Typography>

        <section className={classes.formWrapper}>
          <TextField
            id="name"
            label="Language"
            value={language}
            className={classes.textFieldLarge}
            onChange={handleInputChange('language')}
            InputLabelProps={{
              FormLabelClasses: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.textFieldLabel,
                underline: classes.cssUnderline,
              },
            }}
          />

          <TextField
            id="name"
            label="Stars"
            value={stars}
            className={classes.textFieldSmall}
            onChange={handleInputChange('stars')}
            InputLabelProps={{
              FormLabelClasses: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.textFieldLabel,
                underline: classes.cssUnderline,
              },
            }}
          />
        </section>

        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleSearchSubmit()}
        >
          Search
        </Button>
      </section>
    );
  }
}

export default withStyles(styles)(SearchForm);
