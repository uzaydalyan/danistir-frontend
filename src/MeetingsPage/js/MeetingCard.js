import { Button } from '@mui/material';
import '../scss/MeetingCard.scss'
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

function MeetingCard(props) {

    const navigate = useNavigate();

    function handleVideoClick() {
        console.log(props.meeting.appointmentToken)
        navigate('/video?t=' + props.meeting.appointmentToken + "&ch=" + props.meeting.channelName)
    }

    const handleClose = () => {
        props.handleClose()
    };

    return (
        <div>
            <Dialog
                open={props.popupOpen}
                onClose={handleClose}
                keepMounted
                maxWidth={"lg"}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{props.meeting.name}</DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '100%' }}>

                        {new Date(props.meeting.appointmentDate).toLocaleString("tr")}
                    </Box>
                </DialogContent>
                <DialogActions>
                    {!props.meeting.isWithClient &&
                        <Button className='meeting-card-profile-button'
                            variant='contained'>
                            Danışmanı Puanla
                        </Button>
                    }
                    {!props.meeting.isPast &&
                        <Button className='meeting-card-video-button'
                            variant='contained'
                            onClick={handleVideoClick}
                        >
                            Görüşmeye Git
                        </Button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MeetingCard;