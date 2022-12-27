import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid'
import { useEffect, useState } from "react";
import trLocale from '@fullcalendar/core/locales/tr';
import MeetingCard from './MeetingCard';
import '../scss/Agenda.scss'


function Agenda(props) {

    const [events, setEvents] = useState([])
    const [popUpOpen, setPopupOpen] = useState(false)
    const [clickedEvent, setClickedMeetingEvent] = useState()

    const handleDateClick = (arg) => {

        let clickedEvent = props.events[arg.event.id]
        setClickedMeetingEvent(clickedEvent)
        setPopupOpen(true)
    }

    const handleCloseEvent = () => {

        setPopupOpen(false)
    }

    useEffect(() => {
        let tmpEvents = []
        props.events.map((event, index) => {
            const start = new Date(event.appointmentDate)
            const end = new Date(start.getTime() + 60 * 60 * 1000)
            tmpEvents.push({ id: index, title: event.name, start: start, end: end })
        })

        setEvents(tmpEvents)
    }, [props])


    return (
        <div className="meetings-agenda" style={{ width: "100%" }}>
            <FullCalendar
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                locale={trLocale}
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                dateClick
                eventClick={handleDateClick}
                selectable={true}
            />
        {popUpOpen && clickedEvent && <MeetingCard meeting={clickedEvent} handleClose={handleCloseEvent} popupOpen={popUpOpen} />}
        </div>
    );
}

export default Agenda;