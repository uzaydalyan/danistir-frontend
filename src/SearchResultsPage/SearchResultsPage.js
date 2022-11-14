import * as React from 'react';
import './SearchResultsPage.scss';
import ResultCard from './components/js/ResultCard';
import FilterBar from './components/js/FilterBar';

function SearchResults(/*props: props*/) {

 

  return (

    <div className="search-results">

        <FilterBar />
        <div className='search-results-seperator'></div>
        <div className='search-results-list'>
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        </div>
        

    </div>
  );
}

export default SearchResults;