import { cardActionAreaClasses } from '@mui/material';
import '../scss/CrossCard.scss';
import $ from 'jquery';



function CrossCard(props) {

  /* const [values, setValues] = useState({
     name: '',
     surname: '',
     email: '',
     password: '',
     passwordverification: '',
     showPassword: false,
   });*/

  if (props.direction == "left") {

    return (
      <div className='cross-card-bg-white'>
        <div className="cross-card">
          <div className="cross-text cross-text-left">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
          </div>

          <div className="cross-img cross-img-right">
            <img src={props.imgSrc} />
          </div>
        </div>
      </div>
    )
  } else {

    return (

      <div className='cross-card-bg-gray'>
        <div className="cross-card">

          <div className="cross-img-left">
            <img src={props.imgSrc} />
          </div>
          <div className="cross-text cross-text-right">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
          </div>

        </div>
      </div>
    )
  }

}

export default CrossCard;
