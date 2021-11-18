import React, { Component } from "react";
import "./Main.scss";
import ContentContainer from "./ContentContainer";
import Content from "./Content";
import Meter from "./Meter";
import LoadContainer from "./LoadContainer";
import TotalElectricity from "./TotalElectricity";
import EventAlertContainer from "./EventAlertContainer";
import Chart from "./Chart";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      maxValue: 0,
      time: "불러오는 중입니다...",
    };

    this.updateElectricity = this.updateElectricity.bind(this);
  }

  updateElectricity() {
    const RAND_NUM = Math.random() * 10;
    const VALUE = Number.parseFloat(RAND_NUM).toFixed(3);
    const DATE = new Date();
    const CURRENT_TIME =
      DATE.getHours() + ":" + DATE.getMinutes() + ":" + DATE.getSeconds();

    this.setState((prev) => {
      let temp = {
        value: VALUE,
        maxValue: Math.max(VALUE, prev.maxValue),
        time: CURRENT_TIME,
      };
      return temp;
    });
  }

  componentDidMount() {
    setInterval(this.updateElectricity, 1000);
  }

  render() {
    // console.log("Main - Rendering");
    const { mainIsFull } = this.props;

    return (
      <section className={"main" + (mainIsFull ? " main--isFull" : "")}>
        <ContentContainer>
          <Content title="실시간 소비전력">
            <Meter value={this.state.value} />
            <LoadContainer
              value={this.state.value}
              maxValue={this.state.maxValue}
              time={this.state.time}
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
          <Chart time={this.state.time} value={this.state.value} />
        </ContentContainer>
      </section>
    );
  }
}

export default Main;
