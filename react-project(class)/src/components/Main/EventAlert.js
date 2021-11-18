import React, { Component } from "react";
import "./EventAlert.scss";

class EventAlert extends Component {
  render() {
    const { title, value, modifier } = this.props;

    return (
      <div className={"event-alert event-alert--" + modifier}>
        <dt className="event-alert__word">{title}</dt>
        <dd className="event-alert__value">{value}</dd>
      </div>
    );
  }
}

export default EventAlert;
