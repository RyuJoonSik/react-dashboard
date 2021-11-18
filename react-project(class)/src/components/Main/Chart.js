import React, { Component } from "react";
import "./Chart.scss";
import LineChart from "../../js/LineChart";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.chart = React.createRef();
    this.lineChart = null;
  }

  componentDidMount() {
    this.lineChart = new LineChart(this.chart);

    this.lineChart.drawChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.time !== this.props.time) {
      const totalSecond = this.props.time
        .split(":")
        .map((cur, idx) => {
          if (idx === 0) {
            return cur * 1 * 3600;
          } else if (idx === 1) {
            return cur * 1 * 60;
          } else if (idx === 2) {
            return cur * 1;
          }
        })
        .reduce((acc, cur) => acc + cur);
      const VALUE = this.props.value;

      this.lineChart.drawDot(totalSecond, VALUE);
    }
  }

  render() {
    return (
      <article className="chart">
        <ul className="chart__list">
          <li className="chart__item">
            <button className="chart__btn chart__btn--isClicked">실시간</button>
          </li>
          <li className="chart__item">
            <button className="chart__btn">일별</button>
          </li>
          <li className="chart__item">
            <button className="chart__btn">월별</button>
          </li>
        </ul>
        <canvas ref={this.chart} className="chart__canvas"></canvas>
      </article>
    );
  }
}

export default Chart;
