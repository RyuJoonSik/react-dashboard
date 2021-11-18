import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    // console.log("Heaer Button - rendering");
    const { children, handleClick, isFloatRight } = this.props;

    return (
      <button
        onClick={handleClick}
        className={"header-btn" + (isFloatRight ? " header-btn--right" : "")}
      >
        {children}
      </button>
    );
  }
}

export default Button;
