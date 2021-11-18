import React, { Component } from "react";
import Load from "./Load";
import "./LoadContainer.scss";

class LoadContainer extends Component {
  render() {
    // console.log("LoadContainer - Rendering");

    const { value, maxValue, time } = this.props;

    return (
      <section className="load-container">
        <Load title="현재 부하" value={value} time={time} />
        <Load title="최대 부하" value={maxValue} time={time} />
      </section>
    );
  }
}

export default LoadContainer;
