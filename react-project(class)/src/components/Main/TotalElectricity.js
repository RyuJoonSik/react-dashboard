import React, { Component } from "react";
import "./TotalElectricity.scss";
import TotalElectricityLevel from "./TotalElectricityLevel";
import TotalElectricityContent from "./TotalElectricityContent";

class TotalElectricity extends Component {
  render() {
    const INFO = {
      currentLevel: 1,
      today: 56.097,
      thisMonth: 464.925,
      goal: 2000,
    };
    return (
      <article className="total-electricity">
        <TotalElectricityLevel currentLevel={INFO.currentLevel} />
        <TotalElectricityContent info={{ ...INFO }} />
      </article>
    );
  }
}

export default TotalElectricity;
