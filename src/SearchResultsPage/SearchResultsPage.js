import * as React from 'react';
import './SearchResultsPage.scss';
import ResultCard from './components/js/ResultCard';
import FilterBar from './components/js/FilterBar';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchResults } from '../services/services';

const weekDays = [
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi',
  'Pazar'
];

function SearchResults(props) {

  const [allResults, setAllResults] = useState([])
  const [results, setResults] = useState([])
  const params = useParams();

  function handleFilterButton(
    selectedAreas, 
    selectedMin, 
    selectedMax, 
    selectedDays, 
    selectedStartHour, 
    selectedEndHour
  ) {

    let tmpArray = allResults

    if(selectedAreas.length !== 0){

      tmpArray = tmpArray.filter((result) => {
        let tmpAreas = []
        result.consultant_info.provideSubAreas.map((sub) => {tmpAreas.push(sub.name)})
        return selectedAreas.some(r => tmpAreas.includes(r))
      })
    }

    if(selectedDays.length !== 0){

      tmpArray = tmpArray.filter((result) => {
        let freeTimes = result.consultant_info.freeTimes
        let isIn = false
        if(freeTimes.length !== 0){

          freeTimes.map((time) => {
              let startAsDate = new Date(time.start)
            selectedDays.map((day) => {

              if((weekDays[startAsDate.getDay()] == day)){
                isIn = true
              }
            })
          })
        }

        return isIn
      })
    }

    if(selectedStartHour && selectedEndHour){

      tmpArray = tmpArray.filter((result) => {
        let freeTimes = result.consultant_info.freeTimes
        let isIn = false
        if(freeTimes.length !== 0){

          freeTimes.map((time) => {
            let startTime = new Date(time.start).toLocaleTimeString('tr')
            let endTime = new Date(time.end).toLocaleTimeString('tr')
            
            if((startTime >= selectedStartHour && startTime <= selectedEndHour) || (endTime >= selectedStartHour && endTime <= selectedEndHour)){
              isIn = true
            }
          })
        }
        return isIn
      })
    }



    setResults(tmpArray)
  }

  useEffect(() => {

    getSearchResults(params.q).then((response) => {
      if(response.status == 200){
        setResults(response.data)
        setAllResults(response.data)
        console.log(response.data)
      } else{
        alert("Failed to load consultants!")
      }
    })
  }, [])

  return (

    <div className="search-results">

        <FilterBar handleFilterButton={handleFilterButton} />
        <div className='search-results-seperator'></div>
        <div className='search-results-list'>

        {results != [] && results.map((consultant) => {

            return (<ResultCard consultant={consultant} />)
        })}

        </div>
        

    </div>
  );
}

export default SearchResults;