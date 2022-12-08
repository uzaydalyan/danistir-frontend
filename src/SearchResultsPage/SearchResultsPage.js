import * as React from 'react';
import './SearchResultsPage.scss';
import ResultCard from './components/js/ResultCard';
import FilterBar from './components/js/FilterBar';

function SearchResults(props) {

  const consultantList = props.consultantList

  

  return (

    <div className="search-results">

        <FilterBar />
        <div className='search-results-seperator'></div>
        <div className='search-results-list'>

        {consultantList && consultantList.map((consultant) => {

            return (<ResultCard consultant={consultant} />)
        })}

        </div>
        

    </div>
  );
}

export default SearchResults;