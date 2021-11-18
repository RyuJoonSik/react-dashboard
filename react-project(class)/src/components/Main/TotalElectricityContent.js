import React, { Component } from "react";
import "./TotalElectricityContent.scss";

class TotalElectricityContent extends Component {
  render() {
    const { currentLevel, today, thisMonth, goal } = this.props.info;

    return (
      <dl className="total-electricity-content">
        <div className="total-electricity-content__item">
          <dt className="total-electricity-content__word">현재 단계</dt>
          <dd className="total-electricity-content__desc">
            <span className="total-electricity-content__value">
              {currentLevel}
            </span>
          </dd>
        </div>
        <div className="total-electricity-content__item">
          <dt className="total-electricity-content__word">오늘</dt>
          <dd className="total-electricity-content__desc">
            <span className="total-electricity-content__value">{today}</span>
            <span className="total-electricity-content__KWh">KWh</span>
          </dd>
        </div>
        <div className="total-electricity-content__item">
          <dt className="total-electricity-content__word">이번달</dt>
          <dd className="total-electricity-content__desc">
            <span className="total-electricity-content__value">
              {thisMonth}
            </span>
            <span className="total-electricity-content__KWh">KWh</span>
          </dd>
        </div>
        <div className="total-electricity-content__item">
          <dt className="total-electricity-content__word">
            월별 목표 소비전력량
          </dt>
          <dd className="total-electricity-content__desc">
            <span className="total-electricity-content__value">
              {goal.toLocaleString(undefined, { minimumFractionDigits: 3 })}
            </span>
            <span className="total-electricity-content__KWh">KWh</span>
          </dd>
        </div>
      </dl>
    );
  }
}

export default TotalElectricityContent;
