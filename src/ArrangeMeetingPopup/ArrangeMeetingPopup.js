/* eslint-disable default-case */
import * as React from 'react';
import Button from '@mui/material/Button';
import './ArrangeMeetingPopup.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import MeetingScheduler from './components/js/MeetingScheduler';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import ChipSelector from '../CommonComponents/js/ChipSelector';
import ScheduleMeetingTextField from './components/js/ScheduleMeetingTextFields';
import { setAppointment } from '../services/services';
import { useCookies } from 'react-cookie';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ArrangeMeetingPopup(props) {

    const [cookies, setCookie] = useCookies(['access_token'])

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
    ];

    const [meetingValues, setMeetingValues] = React.useState({id: props.consultant.consultant_info.consultant_id, appointmentDate: null})

    function setSelectedTime(date){

        setMeetingValues({...meetingValues,  appointmentDate: date.startTime.toString().split(' ').slice(0, 5).join(' ')})
    }

    const steps = ['Uygun bir tarih seçin', 'Gerekli bilgileri girin', ''];

    const handleClose = () => {
        setActiveStep(0);
        props.closePopup()
    };

    const stepViews = [<MeetingScheduler freeTimes={props.consultant.consultant_info.freeTimes} setSelectedTime={setSelectedTime} />, <ScheduleMeetingTextField subAreas={props.consultant.consultant_info.provideSubAreas}/>, <div>Randevunuzu onaylandı!</div>]

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {

        if(activeStep === stepViews.length-2){

            if(cookies.danistir_access_token){
                console.log(meetingValues)
                setAppointment(meetingValues, cookies.danistir_access_token).then((response) => {
                    console.log(response)
                    if(response.status != 200 && response.status != 201){
                        alert("Failed while arranging appointment!");
                        handleClose();
                    }
                })
            } else{
                window.location.href = '/login';
            }

            
        }

        if(activeStep === stepViews.length-1){
            handleClose()
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (

        <div className="arrange-meeting-popup">
            <Dialog
                open={props.popupOpen}
                TransitionComponent={Transition}
                keepMounted
                maxWidth={"lg"}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Görüşme Ayarlayın"}</DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                <div className='dialog-content-bg'>
                                    Randevu talebiniz alındı!
                                </div>
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <div className='dialog-content-bg'>
                                    {stepViews[activeStep]}
                                </div>
                            </React.Fragment>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>İptal</Button>
                    <Button onClick={handleBack}>Geri</Button>
                    <Button variant="contained" color='primary' onClick={handleNext}>{(activeStep === stepViews.length) ? "Bitir" : "Devam"}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ArrangeMeetingPopup;