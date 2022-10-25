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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ArrangeMeetingPopup(props) {

    const handleClose = () => {
        props.closePopup()
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
                    <DialogContentText id="alert-dialog-slide-description">
                        Uzmanımızın uygun saatlerinden kendinize uygun olan bir saat seçip, destek alın!
                    </DialogContentText>
                    <MeetingScheduler />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>İptal</Button>
                    <Button onClick={handleClose}>Devam</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ArrangeMeetingPopup;