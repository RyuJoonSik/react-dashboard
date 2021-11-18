import React from "react";
import "./EventAlertContainer.scss";
import EventAlert from "./EventAlert";
import { EVENTS } from "../../data/EventAlertData";

function EventAlerContainert() {
  const WORDS = EVENTS.map((event) => (
    <EventAlert
      key={event.id}
      title={event.title}
      value={event.value}
      modifier={event.id}
    />
  ));

  const WORDS_1 = WORDS.filter((WORD, IDX) => IDX < 3);
  const WORDS_2 = WORDS.filter((WORD, IDX) => IDX >= 3);

  return (
    <dl className="event-alert-container">
      <div className="event-alert-container__wrap">{WORDS_1}</div>
      <div className="event-alert-container__wrap">{WORDS_2}</div>
    </dl>
  );
}

export default EventAlerContainert;
