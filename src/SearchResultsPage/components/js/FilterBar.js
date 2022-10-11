import ChipSelector from "./ChipSelector";
import '../scss/FilterBar.scss'
import MinMaxSelector from "./MinMaxSelector";
import DatePicker from "./DatePicker";


function FilterBar() {
    return ( 
        <div className="filter-bar">
            <div className="filter-bar-title">Danışmanlık Alanları</div>
            <ChipSelector />
            <div className="filter-bar-seperator"></div>
            <div className="filter-bar-title">Danışmanlık Ücretleri</div>
            <MinMaxSelector />
            <div className="filter-bar-seperator"></div>
            <div className="filter-bar-title">Aranan Gün</div>
            <DatePicker />
        </div>
     );
}

export default FilterBar;