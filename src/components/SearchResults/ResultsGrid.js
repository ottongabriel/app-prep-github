import React from 'react';
import ResultsGridItem from './ResultsGridItem';

const styles = {
  display: 'flex',
  fexWrap: 'wrap',
  height: 700
}

const ResultsGrid = ({ repos }) => (
  <section style={styles}>
    {repos.length &&
      repos.map(repo => <ResultsGridItem key={repo.id} repo={repo} />)}
  </section>
);


export default ResultsGrid;