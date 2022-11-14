import React from 'react';
import ChipSelector from "../../../CommonComponents/js/ChipSelector";
import '../scss/FilterBar.scss'
import MinMaxSelector from "./MinMaxSelector";
import DatePicker from "./DatePicker";
import TimeRangeSelector from "./TimeRangeSelector";
import { Button } from "@mui/material";


function FilterBar() {

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];

      const days = [
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi',
        'Pazar'
      ];

    return ( 
        <div className="filter-bar">
            <div className="filter-bar-title">Danışmanlık Alanları</div>
            <ChipSelector options={names} label={"Alan"}/>
            <div className="filter-bar-seperator"></div>
            <div className="filter-bar-title">Danışmanlık Ücretleri</div>
            <MinMaxSelector />
            <div className="filter-bar-seperator"></div>
            <div className="filter-bar-title">Aranan Gün</div>
            <ChipSelector options={days} label={"Gün"}/>
            <div className="filter-bar-seperator"></div>
            <div className="filter-bar-title">Aranan Saat Aralığı</div>
            <TimeRangeSelector />
            <div className="filter-bar-vertical-margin"></div>
            <Button variant="contained" size="small">Uygula</Button>
            
        </div>
     );
}

export default FilterBar;