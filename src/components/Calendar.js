import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

import eventData from '../data/events.json';
import fiLocale from '@fullcalendar/core/locales/fi';

const Calendar = () => {
  return (
    <FullCalendar
      locales={[fiLocale]}
      locale='fi'
      dayHeaderContent='Mitä halutaankaan "dayHeaderContent Calendar.js sisään"' //{false} poistais koko osion
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView='timeGrid'
      headerToolbar={false}
      allDaySlot={false}
      slotLabelFormat={[{ hour: 'numeric', minute: '2-digit' }]}
      slotMinTime='08:00:00'
      slotMaxTime='17:00:00'
      height={504}
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

        return {
          title: data.title + ' - ' + data.speakerName,
          start: new Date(year, month - 1, day, hour, minute),
          end: new Date(year, month - 1, day, endHour, endMinute),
          url: `#/event/${data.videoUrl}`,
        };
      })}
    />
  );
};

export default Calendar;
