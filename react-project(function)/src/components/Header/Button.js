import React, { useEffect } from "react";
import "./Button.scss";

function Button({ handleClick, isFloatRight, children }) {
  useEffect(() => {
    // console.log("HEADER BTN render");
  }, []);

  return (
    <button
      onClick={handleClick}
      className={"header-btn" + (isFloatRight ? " header-btn--right" : "")}
    >
      {children}
    </button>
  );
}

export default Button;
