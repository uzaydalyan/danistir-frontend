import './MeetingsPage.scss'
import MeetingCard from './js/MeetingCard';
import { useEffect, useState } from 'react';
import { getAccountInfo, getClientAppointments, getConsultantAppointments } from '../services/services';
import { useCookies } from 'react-cookie';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import jQuery from 'jquery';
import Agenda from './js/Agenda';

function MeetingsPage(props) {

    const [cookies, setCookies] = useCookies('access-token')

    const [meetings, setMeetings] = useState([]);
    const [isConsultant, setIsConsultant] = useState(false);
    const [switchSelection, setSwitchSelection] = useState("0");
    

    function handleSwitchSelection(event) {
        setSwitchSelection(event.target.value)
        if(event.target.value == "0"){
            getConsultantAppointments(cookies.danistir_access_token).then((response) => {
                let tmpMeetings = []

                response.data.map((aMeeting) => {

                    aMeeting.isWithClient = true
                    tmpMeetings.push(aMeeting)
                })
                setMeetings(tmpMeetings)
            })
        } else{
            getClientAppointments(cookies.danistir_access_token).then((response) => {
                let tmpMeetings = []
                response.data.map((aMeeting) => {

                    aMeeting.isWithClient = false
                    tmpMeetings.push(aMeeting)
                })
                setMeetings(tmpMeetings)
            })
        }
    }

    useEffect(() => {

        jQuery(".navbar").css("display", "block")
        jQuery(".video-call-page").css("background-color", "white")

        getAccountInfo(cookies.danistir_access_token).then((response) => {
            setIsConsultant(response.data.is_consultant)
            return response.data.is_consultant
        }).then((is_consultant) => {
            if (is_consultant) {
                getConsultantAppointments(cookies.danistir_access_token).then((response) => {
                    setMeetings(response.data)
                    console.log(response.data)
                })
            } else {
                setSwitchSelection("1")
                getClientAppointments(cookies.danistir_access_token).then((response) => {
                    setMeetings(response.data)
                })
            }
        })

    }, [])

    return (
        <div className='meetings-page'>
            <Agenda events={meetings}/>
        </div>
    );
}

export default MeetingsPage;