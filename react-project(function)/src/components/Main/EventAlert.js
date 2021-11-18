import React from "react";
import "./EventAlert.scss";

function EventAlert(props) {
  const { title, value, modifier } = props;

  return (
    <div className={"event-alert event-alert--" + modifier}>
      <dt className="event-alert__word">{title}</dt>
      <dd className="event-alert__value">{value}</dd>
    </div>
  );
}

export default EventAlert;
