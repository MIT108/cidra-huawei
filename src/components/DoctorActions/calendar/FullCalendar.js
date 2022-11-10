import React, { useState } from "react";
import "./styles.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./Events";



export default function FullCalendarComponent() {

    moment.locale("en-GB");
const localizer = momentLocalizer(moment);

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  const [eventsData, setEventsData] = useState(events);

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        dateClick={(e) => handleDateClick(e)}
        events={[
          { title: "event 1", date: "2021-05-07" },
          { title: "event 2", date: "2021-05-17" }
        ]}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
