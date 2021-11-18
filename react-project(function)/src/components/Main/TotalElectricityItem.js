import React from "react";
import "./TotalElectricityItem.scss";

function TotalElectricityItem({ title, content, hasNoUnit }) {
  return (
    <div className="total-electricity-item">
      <dt className="total-electricity-item__word">{title}</dt>
      <dd className="total-electricity-item__desc">
        <span className="total-electricity-item__value">{content}</span>
        {hasNoUnit ? null : (
          <span className="total-electricity-item__KWh">KWh</span>
        )}
      </dd>
    </div>
  );
}

export default TotalElectricityItem;
