import { Button } from '@mui/material';
import '../scss/MeetingCard.scss'
import {Link, useNavigate} from 'react-router-dom';

function MeetingCard(props) {

    const navigate = useNavigate();
    console.group(props)

    function handleVideoClick(){
        console.log(props.meeting.appointmentToken)
        navigate('/video?t=' + props.meeting.appointmentToken + "&ch=" + props.meeting.channelName)
    }


    return (
        <div className='meeting-card'>
            <div className='meeting-card-name'>{props.meeting.name}</div>
            <div className='meeting-card-time'>{props.meeting.time}</div>
            <div className='meeting-card-buttons'>
                {!props.isWithClient &&
                    <Button className='meeting-card-profile-button'
                    variant='contained'>
                        Danışmanı Görüntüle
                    </Button>
                }
                {!props.meeting.isPast &&
                    <Button className='meeting-card-video-button'
                        variant='contained'
                        onClick={handleVideoClick}
                    >
                        Görüşmeye Git
                    </Button>}
            </div>
        </div>
    );
}

export default MeetingCard;