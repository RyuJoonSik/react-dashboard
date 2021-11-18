import React, { useEffect } from "react";
import "./Load.scss";

function Load(props) {
  const { title, value, time } = props;

  useEffect(() => {
    // console.log("LOAD render");
  }, []);

  return (
    <article className="load">
      <h3 className="load__title">{title}</h3>
      <div className="load__wrap-value">
        <strong className="load__value">{value}</strong>
        <span className="load__kw">KW</span>
      </div>
      <em className="load__time">{time}</em>
    </article>
  );
}

export default Load;
