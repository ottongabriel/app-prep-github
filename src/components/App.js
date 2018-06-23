import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
// import Header from './Header';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const styles = {
  withGradient: {
    height: 360,
    background: 'linear-gradient(to bottom, #5a4ba3 0%, #7b3795 100%)',
  },

  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
};

class App extends Component {
  // We'll use these to send as part of our URI params to GitHub
  state = {
    searchInProgress: false,
    language: '',
    stars: '',
  };

  handleSearchSubmit = (language = '', stars = '') => {
    this.setState({
      language,
      stars,
      searchInProgress: true,
    });
  };

  resetSearch = () => {
    this.setState({
      searchInProgress: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { language, stars, searchInProgress } = this.state;

    return (
      <main className={classes.root}>
        <CssBaseline />

        <section className={classes.withGradient}>
          {/* <Header /> */}

          <section className={classes.contentWrapper}>
            <SearchForm
              handleInputChange={this.handleInputChange}
              handleSearchSubmit={this.handleSearchSubmit}
            />
          </section>
        </section>

        <section>
          <SearchResults
            language={language}
            stars={stars}
            searchInProgress={searchInProgress}
            resetSearch={this.resetSearch}
          />
        </section>
      </main>
    );
  }
}

export default withStyles(styles)(App);
