import React, { Component } from "react";
import "./Meter.scss";
import ElectricMeter from "../../js/ElectricMeter";

class Meter extends Component {
  constructor(props) {
    super(props);

    this.meter = React.createRef();
    this.ElectricMeter = null;
  }

  componentDidMount() {
    this.ElectricMeter = new ElectricMeter(this.meter);

    this.ElectricMeter.drawMeter(this.value);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.ElectricMeter.drawMeter(this.props.value);
    }
  }

  render() {
    // console.log("Meter - Rendering");

    return <canvas ref={this.meter} className="meter"></canvas>;
  }
}

export default Meter;
