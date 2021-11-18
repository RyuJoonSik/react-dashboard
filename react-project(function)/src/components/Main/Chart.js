import React, { useEffect, useRef } from "react";
import "./Chart.scss";
import LineChart from "../../js/LineChart";

function getTotalSecond(time) {
  const TOTAL_SECOND = time
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

  return TOTAL_SECOND;
}

function Chart(props) {
  const { time, value } = props;
  const CHART = useRef(null);

  useEffect(() => {
    const LINE_CHART = new LineChart(CHART);
    LINE_CHART.drawChart();
  }, []);

  useEffect(() => {
    const LINE_CHART = new LineChart(CHART);
    const TOTAL_SECOND = getTotalSecond(time);

    LINE_CHART.drawDot(TOTAL_SECOND, value);
  }, [time, value]);

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
      <canvas ref={CHART} className="chart__canvas"></canvas>
    </article>
  );
}

export default Chart;
