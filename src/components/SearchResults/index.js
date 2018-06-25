import React, { Component } from 'react';
import axios from 'axios';

import { buildSearchURI } from "../../utils";

import ResultsGrid from './ResultsGrid';
import { Divider } from '@material-ui/core';

class SearchResults extends Component {
  state = {
    repos: [],
  }

  // componentDidUpdate = async (prevProps, prevState) => {    
  //   const { language, stars, searchInProgress } = this.props;

  //   if (prevState.repos !== this.state.repos) {
  //     this.props.resetSearch();

  //     return;
  //   }

  //   // A search in progress
  //   if (searchInProgress) {
  //     const encodedURI = buildSearchURI({ language, stars });
  //     const githubResponse = await axios.get(encodedURI);
  //     //this is where the try-catch should be
  //     const repos = githubResponse.data.items.slice(0,15);
      
  //     console.log(repos);
  //     this.setState({ repos });
  //   }
  // }

  componentDidUpdate = async (prevProps, prevState) => {
    const { language, stars, searchInProgress } = this.props;

    if (prevState.repos !== this.state.repos) {
      this.props.resetSearch();

      return;
    }

    // A search is in progress
    if (searchInProgress) {
      const encodedURI = buildSearchURI({ language, stars });
      const githubResponse = await axios.get(encodedURI);
      const repos = githubResponse.data.items.slice(0, 15);

      this.setState({ repos });
    }
  };

  render() {
    return (
      <ResultsGrid repos={this.state.repos} />
    )
  }
}

export default SearchResults;
