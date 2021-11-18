import React, { useEffect, useRef } from "react";
import "./Meter.scss";
import ElectricMeter from "../../js/ElectricMeter";

function Meter({ value }) {
  const METER = useRef(null);

  useEffect(() => {
    // console.log("METER render");
    const ELECTRIC_METER = new ElectricMeter(METER);

    ELECTRIC_METER.drawMeter(value);
  }, [value]);

  return <canvas ref={METER} className="meter"></canvas>;
}

export default Meter;
