import React, { useState } from 'react';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { Redirect } from 'react-router';


const Calendar = () => {
    const [date, setDate] = useState(null);

    if (date) {
        return <Redirect to={`/day/${date}`} />
    }

    return <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        dateClick={(event) => {
            console.log("clicked on date", event.date);
            setDate(event.date);
        }}
    />
}

export default Calendar;
