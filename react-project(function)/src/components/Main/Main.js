import React, { useState, useEffect } from "react";
import "./Main.scss";
import ContentContainer from "./ContentContainer";
import Content from "./Content";
import Meter from "./Meter";
import LoadContainer from "./LoadContainer";
import TotalElectricity from "./TotalElectricity";
import EventAlertContainer from "./EventAlertContainer";
import Chart from "./Chart";

function updateElectricity(maxVal) {
  const RAND_NUM = Math.random() * 10;
  const VALUE = Number.parseFloat(RAND_NUM).toFixed(3);
  const DATE = new Date();
  const CURRENT_TIME =
    DATE.getHours() + ":" + DATE.getMinutes() + ":" + DATE.getSeconds();
  const TEMP = {
    value: VALUE,
    maxValue: Math.max(VALUE, maxVal),
    time: CURRENT_TIME,
  };

  return TEMP;
}

function Main({ mainIsFull }) {
  const [record, setRecord] = useState({
    value: 0,
    maxValue: 0,
    time: "불러오는 중입니다...",
  });

  useEffect(() => {
    const TIMER = setInterval(() => {
      const { maxValue } = record;
      const TEMP = updateElectricity(maxValue);

      setRecord(TEMP);
    }, 1000);

    return () => clearInterval(TIMER);
  });

  return (
    <section className={"main" + (mainIsFull ? " main--isFull" : "")}>
      <ContentContainer>
        <Content title="실시간 소비전력">
          <Meter value={record.value} />
          <LoadContainer
            value={record.value}
            maxValue={record.maxValue}
            time={record.time}
          />
        </Content>
        <Content title="누적 소비전력량">
          <TotalElectricity />
        </Content>
        <Content title="이벤트 알림">
          <EventAlertContainer />
        </Content>
      </ContentContainer>
      <ContentContainer>
        <Chart time={record.time} value={record.value} />
      </ContentContainer>
    </section>
  );
}

export default Main;
