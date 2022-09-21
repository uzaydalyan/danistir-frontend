import '../scss/ResultCard.scss'
import Rating from '@mui/material/Rating';


function ResultCard(props) {

  return (

    <div className="result-card">

      <div className='result-card-img'></div>
      <div className='result-card-txt'>
        <div className='result-card-txt-name'><p>Uzay Dalyan</p></div>
        <div className='result-card-txt-rating'>
        <Rating name="read-only" value={4.5} precision={0.01} readOnly />
        <div className='result-card-txt-rating-text'><p>4.5 (210)</p></div>
        </div>
        <div className='result-card-txt-about-title'>Danışmanlık Alanları</div>
        <div className='result-card-txt-about'><p>Lorem ipsum dsakdak dsalkdasl dksaldksal dsakldsakld dsakldkasld dsaldkasld dksaldkasl</p></div>
        <div className='result-card-txt-buttons'>
          <button className='result-card-txt-buttons-meet'><p>HEMEN RANDEVU</p></button>
          <button className='result-card-txt-buttons-detail'><p>DETAY</p></button>
        </div>
      
      </div> 

    </div>
  );
}

export default ResultCard;