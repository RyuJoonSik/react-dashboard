import React, { Component } from "react";
import "./Load.scss";

class Load extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    // console.log("Load - Rendering");

    const { title, value, time } = this.props;

    return (
      <article className="load">
        <h3 className="load__title">{title}</h3>
        <div className="load__wrap-value">
          <strong className="load__value">{value}</strong>
          <span className="load__kw">KW</span>
        </div>
        <em className="load__time">{time}</em>
      </article>
    );
  }
}

export default Load;
