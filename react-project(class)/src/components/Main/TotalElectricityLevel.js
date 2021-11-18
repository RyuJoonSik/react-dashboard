import React, { Component } from "react";
import "./TotalElectricityLevel.scss";

class TotalElectricityLevel extends Component {
  render() {
    const { currentLevel } = this.props;

    return (
      <ul className="total-electricity-level">
        {[1, 2, 3, 4].map((value, idx) => (
          <li
            key={idx}
            className={
              "total-electricity-level__item" +
              (currentLevel === value
                ? " total-electricity-level__item--" + value
                : "")
            }
          >
            {value + "단계"}
          </li>
        ))}
      </ul>
    );
  }
}

export default TotalElectricityLevel;
