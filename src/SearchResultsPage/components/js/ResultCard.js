import '../scss/ResultCard.scss'
import * as React from 'react';
import Rating from '@mui/material/Rating';
import ArrangeMeetingPopup from '../../../ArrangeMeetingPopup/ArrangeMeetingPopup';


function ResultCard(props) {

  const [popupOpen, setPopupOpen] = React.useState(false);
  const consultant = props.consultant;

  function getAreasAsText(areas){

    let text = "";
    areas.map((area, index) => {
      if(index != 0){
        text += ", " + area.name;
      } else{
        text += area.name
      }
    })

    return text;
  }

  const closePopup =  () => {
    setPopupOpen(false)
  }

  return (

    <div className="result-card">

      <div className='result-card-img'></div>
      <div className='result-card-txt'>
        <div className='result-card-txt-name'><p>{consultant.first_name}</p></div>
        <div className='result-card-txt-rating'>
          <Rating name="read-only" value={consultant.consultant_info.average_rating} precision={0.01} readOnly />
          <div className='result-card-txt-rating-text'><p>{consultant.consultant_info.average_rating} ({consultant.consultant_info.total_review})</p></div>
        </div>
        <div className='result-card-txt-about-title'>Danışmanlık Alanları</div>
        <div className='result-card-txt-about'><p>{getAreasAsText(consultant.consultant_info.provideSubAreas)}</p></div>
        <div className='result-card-txt-buttons'>
          <button className='result-card-txt-buttons-meet' onClick={() => setPopupOpen(true)}><p>HEMEN RANDEVU</p></button>
          <button className='result-card-txt-buttons-detail'><p>DETAY</p></button>
        </div>

      </div>
      {popupOpen && <ArrangeMeetingPopup consultant={consultant} popupOpen={popupOpen} closePopup={closePopup} />} 
    </div>
  );
}

export default ResultCard;