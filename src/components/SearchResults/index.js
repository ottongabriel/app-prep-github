import React, { Component } from 'react';
import axios from 'axios';

import { buildSearchURI } from '../../utils';

import ResultsGrid from './ResultsGrid';

class SearchResults extends Component {
  state = {
    repos: [],
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { language, stars, searchInProgress } = this.props;

    // A search is in progress
    if (searchInProgress) {
      const encodedURI = buildSearchURI({ language, stars });
      const githubResponse = await axios.get(encodedURI);
      const repos = githubResponse.data.items.slice(0, 15);

      this.setState({ repos });
    }

    if (prevState.repos !== this.state.repos) {
      this.props.resetSearch();
    }
  };

  render() {
    return <ResultsGrid repos={this.state.repos} />;
  }
}

export default SearchResults;
