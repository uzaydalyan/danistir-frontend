import * as React from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';

export default function MeetingScheduler(props) {

  const availableTimeslots =  () => {

    let availableTimes = []

    if(props.freeTimes){

      for(let i = 0; i < props.freeTimes.length; i++){

        availableTimes.push({i, startTime: props.freeTimes[i].start, endTime: props.freeTimes[i].end})
      }
    }
    return availableTimes;
  } 

  const onSelect = (startTimeEventEmit) => {

    props.setSelectedTime(startTimeEventEmit)
  }

  return (
    <ScheduleMeeting
      borderRadius={10}
      format_startTimeFormatString={"HH:mm"}
      primaryColor="#ffe6cc"
      eventDurationInMinutes={60}
      availableTimeslots={availableTimeslots()}
      onStartTimeSelect={(startTimeEventEmit) => onSelect(startTimeEventEmit)}
    />
  );
}