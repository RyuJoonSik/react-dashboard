import React, { useEffect } from "react";
import "./Content.scss";

function Content({ title, children }) {
  useEffect(() => {
    // console.log("Content render");
  }, []);

  return (
    <article className="content">
      <h2 className="content__title">{title}</h2>
      <div className="content__main">{children}</div>
    </article>
  );
}

export default Content;
