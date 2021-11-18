import React, { Component } from "react";
import "./ContentContainer.scss";

class ContentContainer extends Component {
  render() {
    // console.log("ContentContainer - Rendering");
    const { children } = this.props;

    return <section className="content-container">{children}</section>;
  }
}

export default ContentContainer;
