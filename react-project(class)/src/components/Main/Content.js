import React, { Component } from "react";
import "./Content.scss";

class Content extends Component {
  render() {
    // console.log("Content - Rendering");

    const { title, children } = this.props;

    return (
      <article className="content">
        <h2 className="content__title">{title}</h2>
        <div className="content__main">{children}</div>
      </article>
    );
  }
}

export default Content;
