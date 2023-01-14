import React, { useEffect, useState } from 'react';
import ChipSelector from "../../../CommonComponents/js/ChipSelector";
import '../scss/FilterBar.scss'
import MinMaxSelector from "./MinMaxSelector";
import DatePicker from "./DatePicker";
import TimeRangeSelector from "./TimeRangeSelector";
import { Button } from "@mui/material";
import { getconsultantSubareas } from '../../../services/services';

const days = [
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi',
  'Pazar'
];

function FilterBar(props) {

    const [allAreas, setAllAreas] = useState([])

    const [areaSelectorReady, setAreaSelectorReady] = useState(false)
    const [selectedAreas, setSelectedAreas] = useState([])

    const [selectedMin, setSelectedMin] = useState()
    const [selectedMax, setSelectedMax] = useState()

    const [selectedDays, setSelectedDays] = useState([])

    const [selectedStartHour, setSelectedStartHour] = useState()
    const [selectedEndHour, setSelectedEndHour] = useState()

    function handleFilterButton(){

      props.handleFilterButton(
        selectedAreas, selectedMin, selectedMax, selectedDays, selectedStartHour, selectedEndHour
      )
    }


    useEffect(() => {

      getconsultantSubareas().then((response) => {
        let tmpArray = [...allAreas]
        response.data.subAres.map((area) => {

            tmpArray.push(area.name)
        })
        setAllAreas(tmpArray)
        setAreaSelectorReady(true)
    })
    }, [])

    return ( 
        <div className="filter-bar">
            <div className="filter-bar-title">Danışmanlık Alanları</div>
            {areaSelectorReady && <ChipSelector updateCurrentOptions={(options) => {setSelectedAreas(options)}} currentOptions={[]} allOptions={allAreas} label={"Alan"}/>}
            <div className="filter-bar-seperator"></div>
            <div className="filter-bar-title">Danışmanlık Ücretleri</div>
            <MinMaxSelector handleMinChange={setSelectedMin} handleMaxChange={setSelectedMax} />
            <div className="filter-bar-seperator"></div>
            <div className="filter-bar-title">Aranan Gün</div>
            <ChipSelector updateCurrentOptions={(options) => {setSelectedDays(options)}} currentOptions={[]} allOptions={days} label={"Gün"}/>
            <div className="filter-bar-seperator"></div>
            <div className="filter-bar-title">Aranan Saat Aralığı</div>
            <TimeRangeSelector handleStartChange={setSelectedStartHour} handleEndChange={setSelectedEndHour} />
            <div className="filter-bar-vertical-margin"></div>
            <Button variant="contained" onClick={handleFilterButton} size="small">Uygula</Button>
            
        </div>
     );
}

export default FilterBar;