import React, { useState } from 'react';

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

import eventData from '../data/events.json';
import fiLocale from '@fullcalendar/core/locales/fi';
import moment from 'moment';

const Calendar = () => {
  const checkTime = (data) => {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    const streamStartDate = data.startDate;
    const streamStartTime = data.startTime;
    const streamEndTime = data.endTime;
    const compareStartTime = moment(
      streamStartDate + ' ' + streamStartTime,
      'DD.MM.YYYY HH:mm'
    ).diff(now, 'minutes');
    const compareEndTime = moment(
      streamStartDate + ' ' + streamEndTime,
      'DD.MM.YYYY HH:mm'
    ).diff(now, 'minutes');
    console.log(
      'diff ' + streamStartDate + ' ' + streamStartTime + ' ' + compareStartTime
    );
    console.log(
      'diff end ' + streamStartDate + ' ' + streamEndTime + ' ' + compareEndTime
    );

    if (compareStartTime <= 0 && compareEndTime >= 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <FullCalendar
      locales={[fiLocale]}
      locale='fi'
      dayHeaderContent={false} //{false} poistais koko osion
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView='timeGrid'
      headerToolbar={false}
      allDaySlot={false}
      slotLabelFormat={[{ hour: 'numeric', minute: '2-digit' }]}
      slotMinTime='08:00:00'
      slotMaxTime='17:00:00'
      height={480}
      views={{
        timeGrid: {
          visibleRange: {
            start: '2022-04-01',
            end: '2022-04-02',
          },
        },
      }}
      events={eventData.events.map((data) => {
        const [day, month, year] = data.startDate.split('.').map(Number);
        const [hour, minute] = data.startTime.split(':').map(Number);
        const [endHour, endMinute] = data.endTime.split(':').map(Number);
        if (checkTime(data)) {
          return {
            title:
              data.title +
              ' - ' +
              data.speakerName +
              ', ' +
              data.speakerCompany,
            start: new Date(year, month - 1, day, hour, minute),
            end: new Date(year, month - 1, day, endHour, endMinute),
            url: `#/videos`,
          };
        } else {
          return {
            title:
              data.title +
              ' - ' +
              data.speakerName +
              ', ' +
              data.speakerCompany,
            start: new Date(year, month - 1, day, hour, minute),
            end: new Date(year, month - 1, day, endHour, endMinute),
            url: `#/event/${data.videoUrl}`,
          };
        }
      })}
    />
  );
};

export default Calendar;
