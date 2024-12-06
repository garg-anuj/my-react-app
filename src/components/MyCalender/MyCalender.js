import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// import 'react-big-calendar/lib/sass/styles';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles'; 

// Configure moment.js for react-big-calendar
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  // Define some initial events
  const [events, setEvents] = useState([
    {
      title: 'Meeting with Team',
      start: new Date(2024, 9, 7, 10, 0), // Date format: year, month (0-based), day, hour, minute
      end: new Date(2024, 9, 7, 12, 0),
    },
    {
      title: 'Lunch with Clients',
      start: new Date(2024, 9, 8, 13, 0),
      end: new Date(2024, 9, 8, 14, 0),
    },
  ]);

  // Handle adding a new event
  const handleSelectSlot = (slotInfo) => {
    const newEvent = {
      title: prompt('Enter Event Title'),
      start: slotInfo.start,
      end: slotInfo.end,
    };
    if (newEvent.title) {
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        views={['day','week','month']}
        defaultView="day"
        style={{  margin: '2px',border:"2px solid red" }}
      />
    </div>
  );
};

export default MyCalendar;
