import './MeetingsPage.scss'
import MeetingCard from './js/MeetingCard';
import { useEffect, useState } from 'react';
import { getAccountInfo, getClientAppointments, getConsultantAppointments } from '../services/services';
import { useCookies } from 'react-cookie';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import jQuery from 'jquery';

function MeetingsPage(props) {

    const [cookies, setCookies] = useCookies('access-token')

    const [meetings, setMeetings] = useState([]);
    const [isConsultant, setIsConsultant] = useState(false);
    const [switchSelection, setSwitchSelection] = useState("0");

    function handleSwitchSelection(event) {
        setSwitchSelection(event.target.value)
        if(event.target.value == "0"){
            getConsultantAppointments(cookies.danistir_access_token).then((response) => {
                setMeetings(response.data)
            })
        } else{
            getClientAppointments(cookies.danistir_access_token).then((response) => {
                setMeetings(response.data)
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
            <div className='meetings-page-title'>Görüşmelerim</div>
            {isConsultant && <ToggleButtonGroup
                color="primary"
                value={switchSelection}
                exclusive
                onChange={handleSwitchSelection}
                aria-label="Platform"
            >
                <ToggleButton value="0">Danışanlarım</ToggleButton>
                <ToggleButton value="1">Danıştıklarım</ToggleButton>
            </ToggleButtonGroup>}
            {meetings &&  meetings.length!== 0 && isConsultant && meetings.map((meeting) => {
                return (<div className='meeting-card-bg'><MeetingCard isWithClient={switchSelection == "0"} meeting={meeting} /></div>);
            })}

            {meetings && meetings.length !== 0 && !isConsultant && meetings.map((meeting) => {
                return (<div className='meeting-card-bg'><MeetingCard isWithClient={switchSelection == "0"} meeting={meeting} /></div>);
            })}

        </div>
    );
}

export default MeetingsPage;