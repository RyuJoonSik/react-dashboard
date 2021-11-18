import React, { useEffect } from "react";
import Load from "./Load";
import "./LoadContainer.scss";

function LoadContainer(props) {
  const { value, maxValue, time } = props;

  useEffect(() => {
    // console.log("LOAD CONTAINER render");
  }, []);

  return (
    <section className="load-container">
      <Load title="현재 부하" value={value} time={time} />
      <Load title="최대 부하" value={maxValue} time={time} />
    </section>
  );
}

export default LoadContainer;
