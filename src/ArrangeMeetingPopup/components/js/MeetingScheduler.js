import * as React from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';

export default function MeetingScheduler() {

  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
  });

  const onSelect = (startTimeEventEmit) => {

    console.log(startTimeEventEmit)
  }

  return (
    <ScheduleMeeting
      borderRadius={10}
      format_startTimeFormatString={"HH:mm"}
      primaryColor="#ffe6cc"
      eventDurationInMinutes={30}
      availableTimeslots={availableTimeslots}
      onStartTimeSelect={(startTimeEventEmit) => onSelect(startTimeEventEmit)}
    />
  );
}