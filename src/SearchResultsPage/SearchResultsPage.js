import * as React from 'react';
import './SearchResultsPage.scss';
import ResultCard from './components/js/ResultCard';
import FilterBar from './components/js/FilterBar';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchResults } from '../services/services';

function SearchResults(props) {

  const consultantList = useRef([])

  const params = useParams();

  useEffect(() => {

    getSearchResults(params.q).then((response) => {

      if(response.status == 200){
        consultantList.current = response.data.consultants
      } else{
        alert("Failed to load consultants!")
      }
    })
  }, [])

  return (

    <div className="search-results">

        <FilterBar />
        <div className='search-results-seperator'></div>
        <div className='search-results-list'>

        {consultantList.current && consultantList.current.map((consultant) => {

            return (<ResultCard consultant={consultant} />)
        })}

        </div>
        

    </div>
  );
}

export default SearchResults;