import React, { Component } from "react";
import "./EventAlertContainer.scss";
import EventAlert from "./EventAlert";

class EventAlerContainert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          id: "herb",
          title: "허브",
          value: 2,
        },

        {
          id: "socket",
          title: "콘센트 (전열)",
          value: 0,
        },

        {
          id: "coolingHeating",
          title: "냉난방기",
          value: 0,
        },

        {
          id: "lighting",
          title: "조명",
          value: 25,
        },

        {
          id: "energy",
          title: "에너지더미",
          value: 0,
        },

        {
          id: "sensor",
          title: "재실센서",
          value: 0,
        },
      ],
    };
  }

  render() {
    const WORDS = this.state.events.map((event) => (
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
}

export default EventAlerContainert;
