import React from "react";
import "./TotalElectricityContent.scss";
import TotalElectricityItem from "./TotalElectricityItem";

function TotalElectricityContent(props) {
  const { currentLevel, today, thisMonth, goal } = props.info;

  return (
    <dl className="total-electricity-content">
      <TotalElectricityItem
        title="현재 단계"
        content={currentLevel}
        hasNoUnit={true}
      />
      <TotalElectricityItem title="오늘" content={today} />
      <TotalElectricityItem title="이번달" content={thisMonth} />
      <TotalElectricityItem
        title="월별 목표 소비전력량"
        content={goal.toLocaleString(undefined, { minimumFractionDigits: 3 })}
      />
    </dl>
  );
}

export default TotalElectricityContent;
